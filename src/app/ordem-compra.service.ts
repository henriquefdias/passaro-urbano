import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Pedido } from "./shared/pedido.model";

@Injectable()
export class OrdemCompraService {

    constructor(private httpClient: HttpClient) {}

    public efetivarCompra(pedido: Pedido): void {
        console.log(pedido)
    }
}