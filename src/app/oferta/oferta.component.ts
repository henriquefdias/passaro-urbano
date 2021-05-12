import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
// import { interval, Observable, Observer, Subscription } from 'rxjs';
import { OfertasService } from "../ofertas.service";
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  // private tempoObservableSubscription: Subscription
  // private meuObservableTesteSubscription: Subscription
  public oferta: Oferta

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
    // Método snapshot
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta
      })
    /*
    Método subscribe (Observables)
    this.route.params.subscribe(
      (parametro: any) => {console.log(parametro)},
      (erro: any) => console.log(erro),
      () => console.log("Processamento classificado como concluído.")
    )
    */
    
    /*
    Testes com Observables

    let tempo = interval(2000)

    this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
      console.log(intervalo)
    })
  

    // observable (observavel)
    let meuObservableTeste = new Observable((observer: Observer<string>) => {
      observer.next('Primeiro evento da stream')
      //observer.error('Algum erro foi encontrado na stream de eventos')
      observer.complete()
    })

    // observable (observador)
    this.meuObservableTesteSubscription = meuObservableTeste.subscribe(
      (resultado: string) => console.log(resultado),
      (erro: string) => console.log(erro),
      () => console.log('Stream de eventos finalizada')
    )
    */
    
  }

  ngOnDestroy() {
    /*
    Unsubscribe
    this.meuObservableTesteSubscription.unsubscribe()
    this.tempoObservableSubscription.unsubscribe()
    */
  }

}
