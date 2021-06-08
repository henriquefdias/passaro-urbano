import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { OfertasService } from "../ofertas.service";
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000), // Executa a ação do switchMap após 1 segundo.
      distinctUntilChanged(), // para fazer pesquisas distintas
      switchMap((termo: string) => {
        if(termo.trim() === ''){
          // retornar um observable de array de ofertas vazio
          return of<Oferta[]>([])
        }
        return this.ofertasService.pesquisaOfertas(termo)
      }),
      catchError((err: any) => {
        console.log(err)
        return of<Oferta[]>([])
      })
    ) //retorno Oferta[]
  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca)
    /*
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca)
    
    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas),
      (erro: any) => console.log(`Erro status: ${erro.status}`),
      () => console.log("Fluxo de eventos completo.")
    )
    */
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }

}
