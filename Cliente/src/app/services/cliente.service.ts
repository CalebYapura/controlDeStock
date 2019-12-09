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

    create(cliente: Cliente): Observable<any> { // este metodo crea un artista  y recive un  artista por parametro
        return this.httpClient.post(this.baseUrl , cliente);
    }

    delete(id: number): Observable<Cliente> { // elimina
        return this.httpClient.delete<Cliente>(this.baseUrl + '/' + id);
    }

    update(id: number, cliente: Cliente): Observable<any> {// este actualiza
        // return this.httpClient.put(`${this.baseUrl}/${idArtista}`, artista);
    return this.httpClient.post(this.baseUrl  + id, cliente);
        // return this.httpClient.post<Artista>(this.baseUrl + '/actualizar/' + idArtista , artista);
    }
  getId(id: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+id);
  }
}
