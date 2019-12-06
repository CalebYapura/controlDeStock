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

    create(artista: Pedido): Observable<any> { // este metodo crea un artista  y recive un  artista por parametro
        return this.httpClient.post(this.baseUrl + '/guardar', Pedido);
    }

    delete(id: number): Observable<Pedido> { // elimina
        return this.httpClient.delete<Pedido>(this.baseUrl + '/eliminar/' + id);
    }

    update(id: number, pedido: Pedido): Observable<any> {// este actualiza
        // return this.httpClient.put(`${this.baseUrl}/${idArtista}`, artista);
    return this.httpClient.post(this.baseUrl + '/actualizar/' + id, Pedido);
        // return this.httpClient.post<Artista>(this.baseUrl + '/actualizar/' + idArtista , artista);
    }
}
