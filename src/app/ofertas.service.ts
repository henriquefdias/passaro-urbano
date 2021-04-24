import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Oferta } from './shared/oferta.model';
import { URL_API } from "./app.api";
//import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertasService {

	//private url_api: string = 'http://localhost:3000/ofertas';

	constructor(private http: HttpClient){}
	
    public getOfertas(): Promise<Oferta[]> {
		return this.http.get(`${URL_API}/ofertas?destaque=true`)
			.toPromise()
			.then((resposta: any) => resposta)
    }

	public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
		return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
		.toPromise()
		.then((resposta: any) => resposta)
	}

	public getOfertaPorId(id: number): Promise<Oferta> {
		return this.http.get(`${URL_API}/ofertas?id=${id}`)
			.toPromise()
			.then((resposta: any) => resposta[0])
	}

	public getComoUsarOfertaPorId(id: number): Promise<string> {
		return this.http.get(`${URL_API}/como-usar?id=${id}`)
			.toPromise()
			.then((resposta: any) => {
				return resposta[0].descricao
			})
	}

	public getOndeFicaOfertaPorId(id: number): Promise<string> {
		return this.http.get(`${URL_API}/onde-fica?id=${id}`)
			.toPromise()
			.then((resposta: any) => {
				return resposta[0].descricao
			})
	}

	/*
	public getOfertas2(): Promise<Oferta[]> {
		return new Promise((resolve, reject) => {
			// Algum tipo de processamento que, ao finalizar, chama a função resolve ou a função reject
			let worked = true;
			if(worked) {
				setTimeout(() => resolve(this.ofertas), 3000)
			} else {
				reject({codigo_erro: 404, mensagem_erro: 'Servidor não encontrado'});
			}
		})
		.then((ofertas: Oferta[]) => {
			// fazer alguma tratativa
			console.log('primeiro then')
			return ofertas
		})
		.then((ofertas: Oferta[]) => {
			console.log('segundo then')
			return new Promise((resolve2, reject2) => {
				setTimeout(() => {
					resolve2(ofertas)
				}, 3000);
			})
			.then((ofertas:Oferta[]) => {
				console.log('then da segunda promise')
				return ofertas;
			})
		})
		.then((ofertas:Oferta[]) => {
			console.log('terceiro then apos aguardar mais 3 segundos')
			return ofertas
		})
	}
	// Não será mais utilizado esse método para recuperar as informações.
	*/
}