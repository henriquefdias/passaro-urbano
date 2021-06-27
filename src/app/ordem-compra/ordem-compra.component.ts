import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from "../ordem-compra.service";
import { Pedido } from "../shared/pedido.model";

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  // Pedido
  public pedido: Pedido = new Pedido('','','','')

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''

  // controle de validação dos campos
  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean

  // estado primitivo dos campos (pristine)
  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public complementoEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true

  // controlar botão confirmar compra
  public formEstado: string = 'disabled'

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit(): void {
    //this.ordemCompraService.efetivarCompra()
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco

    this.enderecoEstadoPrimitivo = false

    this.enderecoValido = (this.endereco.length > 3) ? true : false
    this.habilitaForm()
  }
  public atualizaNumero(numero: string): void {
    this.numero = numero

    this.numeroEstadoPrimitivo = false

    this.numeroValido = (this.numero.length > 0) ? true : false
    this.habilitaForm()
  }
  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento

    this.complementoEstadoPrimitivo = false

    if (this.complemento.length > 0) {
      this.complementoValido = true
    }
    this.habilitaForm()
  }
  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento

    this.enderecoEstadoPrimitivo = false

    this.formaPagamentoValido = (this.formaPagamento.length > 0) ? true : false
    this.habilitaForm()
  }

  public habilitaForm(): void{
    if (this.enderecoValido == true && this.numeroValido == true && this.formaPagamentoValido == true) {
      this.formEstado = ''
    } else {
      this.formEstado = 'disabled'
    }
  }

  public confirmarCompra(): void {
    // A função pega os valores presentes nos campos que já estão em variaveis na classe 
    // e passa em um model para o service.
    
    this.pedido.endereco = this.endereco
    this.pedido.numero = this.numero
    this.pedido.complemento = this.complemento
    this.pedido.formaPagamento = this.formaPagamento

    this.ordemCompraService.efetivarCompra(this.pedido)
      .subscribe
  }

}
