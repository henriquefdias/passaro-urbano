import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Oferta } from './shared/oferta.model';

//import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertasService {

	constructor(private http: HttpClient){}
	
    public getOfertas(): Promise<Oferta[]> {
		return this.http.get('http://localhost:3000/ofertas?destaque=true')
			.toPromise()
			.then((resposta: any) => resposta)
    }

	public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
		return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
		.toPromise()
		.then((resposta: any) => resposta)
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