import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Proveedor} from '../models/proveedor.model';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  baseUrl: string;

  constructor(protected httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3030/proveedor';
  }


  getAll(): Observable<Proveedor[]> {// este metodo obtiene todo  los artistas

    return this.httpClient.get<Proveedor[]>(this.baseUrl);
  }

  create(proveedor: Proveedor): Observable<any> { // este metodo crea un artista  y recive un  artista por parametro
    return this.httpClient.post(this.baseUrl, proveedor);
  }

  delete(id: number): Observable<Proveedor> { // elimina
    return this.httpClient.delete<Proveedor>(this.baseUrl +'/'+ id);
  }

  update(id: number, proveedor: Proveedor): Observable<any> {// este actualiza
    // return this.httpClient.put(`${this.baseUrl}/${idArtista}`, artista);
    return this.httpClient.post(this.baseUrl + id, proveedor);
    // return this.httpClient.post<Artista>(this.baseUrl + '/actualizar/' + idArtista , artista);
  }

  getId(id: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+id);
  }
}


