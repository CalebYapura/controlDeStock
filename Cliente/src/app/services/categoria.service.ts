import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
    baseUrl: string;

  constructor(protected httpClient:HttpClient) {

      this.baseUrl='http://localhost:3030/categoria';
   }



    getAll(): Observable<Categoria[]> {// este metodo obtiene todo  los artistas

        return this.httpClient.get<Categoria[]>(this.baseUrl );
    }

    create(categoria: Categoria): Observable<any> { // este metodo crea un artista  y recive un  artista por parametro
        return this.httpClient.post(this.baseUrl , categoria);
    }

    delete(id: number): Observable<Categoria> { // elimina
        return this.httpClient.delete<Categoria>(this.baseUrl + '/' + id);
    }

    update(id: number, categoria: Categoria): Observable<any> {
         // este actualiza
        // return this.httpClient.put(`${this.baseUrl}/${idArtista}`, artista);
    return this.httpClient.post(this.baseUrl + id, categoria);
        // return this.httpClient.post<Artista>(this.baseUrl + '/actualizar/' + idArtista , artista);
    }
  getId(id: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+id);

  }
}
