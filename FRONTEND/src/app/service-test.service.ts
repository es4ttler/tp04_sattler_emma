import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {

  constructor() { }

  postClient(): string {
    return "postClient"
  }

  getClient(): string {
    return "getClient";
  }

  postLogin(): string {
    return "postLogin";
  }

  getCatalogue(): string {
    return "getCatalogue";
  }
}