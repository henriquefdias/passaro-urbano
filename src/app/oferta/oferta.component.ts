import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { interval } from 'rxjs';
import { OfertasService } from "../ofertas.service";
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

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

    let tempo = interval(2000)

    tempo.subscribe((intervalo: number) => {
      console.log(intervalo)
    })
    
  }

}
