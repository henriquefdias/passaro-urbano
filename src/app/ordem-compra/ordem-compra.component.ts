import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
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
    console.log(this.enderecoValido)
    console.log(this.numeroValido)
    console.log(this.formaPagamentoValido)
    console.log(this.formEstado)
  }

}
