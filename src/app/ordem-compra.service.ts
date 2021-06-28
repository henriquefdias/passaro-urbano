import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_API } from './app.api';
import { Pedido } from "./shared/pedido.model";

@Injectable()
export class OrdemCompraService {

    constructor(private httpClient: HttpClient) {}

    public efetivarCompra(pedido: Pedido): Observable<number> {
        return this.httpClient.post(
            `${URL_API}/pedidos`,
            pedido
        ).pipe(map((resposta: Response) => resposta['id']))
    }
}