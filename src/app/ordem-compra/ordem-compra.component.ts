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

  constructor() { }

  ngOnInit(): void {
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco

    this.enderecoEstadoPrimitivo = false

    this.enderecoValido = (this.endereco.length > 3) ? true : false
  }
  public atualizaNumero(numero: string): void {
    this.numero = numero

    this.numeroEstadoPrimitivo = false

    this.numeroValido = (this.numero.length > 0) ? true : false
  }
  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento

    this.complementoEstadoPrimitivo = false

    if (this.complemento.length > 0) {
      this.complementoValido = true
    }
  }
  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento

    this.enderecoEstadoPrimitivo = false

    this.formaPagamentoEstadoPrimitivo = (this.formaPagamento.length > 0) ? true : false
  }

}
