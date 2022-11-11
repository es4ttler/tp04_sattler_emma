import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Fruit } from '../../models/Fruit';

@Injectable({
  providedIn: 'root'
})

export class CatalogService {
  constructor(private http: HttpClient) {}
  env = environment;

  getCatalog(){
    return this.http.get<Fruit[]>(this.env.catalog);
  }
}
