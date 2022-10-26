import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Catalog } from './core/Catalog';
import { Client } from './core/Client';

@Injectable({
  providedIn: 'root'
})

export class CatalogService {
  constructor(private http: HttpClient) {}
  env = environment;

  // getClient(): Client {
  //   return new Client();
  // }

  // postClient(client: Client) {
  //   console.log(client);
  // }

  // postLogin() {
  //   console.log("post login");
  // }

  getCatalog(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>(this.env.catalog);
  }
}
