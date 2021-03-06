import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {
    baseUrl: string;

  constructor(protected httpClient:HttpClient) {

      this.baseUrl='http://localhost:3030/pedido';
   }



    getAll(): Observable<Pedido[]> {// este metodo obtiene todo  los artistas

        return this.httpClient.get<Pedido[]>(this.baseUrl );
    }

    create(pedido: Pedido): Observable<any> { // este metodo crea un artista  y recive un  artista por parametro
        return this.httpClient.post(this.baseUrl , pedido);
    }

    delete(id: number): Observable<Pedido> { // elimina
        return this.httpClient.delete<Pedido>(this.baseUrl + '/' + id);
    }

    update(id: number, pedido: Pedido): Observable<any> {// este actualiza
        // return this.httpClient.put(`${this.baseUrl}/${idArtista}`, artista);
    return this.httpClient.post(this.baseUrl  + id, Pedido);
        // return this.httpClient.post<Artista>(this.baseUrl + '/actualizar/' + idArtista , artista);
    }
  getId(id: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+id);
  }
}
