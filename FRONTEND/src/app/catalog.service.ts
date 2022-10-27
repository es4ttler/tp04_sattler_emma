import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Catalog } from './core/Catalog';

@Injectable({
  providedIn: 'root'
})

export class CatalogService {
  constructor(private http: HttpClient) {}
  env = environment;

  getCatalog(){
    return this.http.get<Catalog[]>(this.env.catalog);
  }
}
