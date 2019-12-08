import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
    baseUrl: string;

  constructor(protected httpClient:HttpClient) {

      this.baseUrl='http://localhost:3030/producto';
   }



    getAll(): Observable<Producto[]> { // este metodo obtiene todo  los productos

        return this.httpClient.get<Producto[]>(this.baseUrl );
    }

    create(producto: Producto): Observable<any> { // este metodo crea un artista  y recive un  artista por parametro
        return this.httpClient.post(this.baseUrl , producto);
    }

    delete(id: number): Observable<Producto> { // elimina
        return this.httpClient.delete<Producto>(this.baseUrl +  id);
    }

    update(id: number, producto: Producto): Observable<any> {// este actualiza
        // return this.httpClient.put(`${this.baseUrl}/${idArtista}`, artista);
    return this.httpClient.post(this.baseUrl + id, producto);
        // return this.httpClient.post<Artista>(this.baseUrl + '/actualizar/' + idArtista , artista);
    }
  getId(id: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+id);

  }
}
