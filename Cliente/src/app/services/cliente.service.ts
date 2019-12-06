import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
    baseUrl: string;

  constructor(protected httpClient:HttpClient) {

      this.baseUrl='http://localhost:3030/cliente';
   }



    getAll(): Observable<Cliente[]> {// este metodo obtiene todo  los artistas

        return this.httpClient.get<Cliente[]>(this.baseUrl );
    }

    create(artista: Cliente): Observable<any> { // este metodo crea un artista  y recive un  artista por parametro
        return this.httpClient.post(this.baseUrl + '/guardar', Cliente);
    }

    delete(id: number): Observable<Cliente> { // elimina
        return this.httpClient.delete<Cliente>(this.baseUrl + '/eliminar/' + id);
    }

    update(id: number, cliente: Cliente): Observable<any> {// este actualiza
        // return this.httpClient.put(`${this.baseUrl}/${idArtista}`, artista);
    return this.httpClient.post(this.baseUrl + '/actualizar/' + id, cliente);
        // return this.httpClient.post<Artista>(this.baseUrl + '/actualizar/' + idArtista , artista);
    }
}
