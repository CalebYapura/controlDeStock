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

      this.baseUrl='http://localhost:3080/producto';
   }



    getAll(): Observable<Producto[]> {// este metodo obtiene todo  los artistas
        
        return this.httpClient.get<Producto[]>(this.baseUrl );
    }

    create(artista: Producto): Observable<any> { // este metodo crea un artista  y recive un  artista por parametro
        return this.httpClient.post(this.baseUrl + '/guardar', Producto);
    }

    delete(id: number): Observable<Producto> { // elimina
        return this.httpClient.delete<Producto>(this.baseUrl + '/eliminar/' + id);
    }

    update(id: number, producto: Producto): Observable<any> {// este actualiza
        // return this.httpClient.put(`${this.baseUrl}/${idArtista}`, artista);
    return this.httpClient.post(this.baseUrl + '/actualizar/' + id, producto);
        // return this.httpClient.post<Artista>(this.baseUrl + '/actualizar/' + idArtista , artista);
    }
}