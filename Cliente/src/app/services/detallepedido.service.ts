import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetallePedido } from '../models/detallepedido.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DetallePedidoService {
    baseUrl: string;

  constructor(protected httpClient:HttpClient) {

      this.baseUrl='http://localhost:3030/detallepedido';
   }



    getAll(): Observable<DetallePedido[]> {// este metodo obtiene todo  los artistas

        return this.httpClient.get<DetallePedido[]>(this.baseUrl );
    }

    create(detallePedido: DetallePedido): Observable<any> { // este metodo crea un artista  y recive un  artista por parametro
        return this.httpClient.post(this.baseUrl + '/guardar', DetallePedido);
    }

    delete(id: number): Observable<DetallePedido> { // elimina
        return this.httpClient.delete<DetallePedido>(this.baseUrl + '/eliminar/' + id);
    }

    update(id: number, detallepedido: DetallePedido): Observable<any> {// este actualiza
        // return this.httpClient.put(`${this.baseUrl}/${idArtista}`, artista);
    return this.httpClient.post(this.baseUrl + '/actualizar/' + id, DetallePedido);
        // return this.httpClient.post<Artista>(this.baseUrl + '/actualizar/' + idArtista , artista);
    }
}
