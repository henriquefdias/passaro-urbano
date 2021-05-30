import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
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
      switchMap((termo: string) => {
        console.log('requisicao http para api')
        if(termo.trim() === ''){
          // retornar um observable de array de ofertas vazio
          return of<Oferta[]>([])
        }
        return this.ofertasService.pesquisaOfertas(termo)
      })
    ) //retorno Oferta[]

    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas)
    )
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('keyup character: ', termoDaBusca)
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

}
