import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogService } from '../catalog.service';
import { Catalog } from '../core/Catalog';

@Component({
  selector: 'app-composant-catalog',
  templateUrl: './composant-catalog.component.html',
  styleUrls: ['./composant-catalog.component.css']
})
export class ComposantCatalogComponent implements OnInit {

  catalogObservable!: Observable<Catalog[]>; 
  catalog=[
    {title: "Pomme", price: 9.50,quantity:2},
    {title: "Poire", price: 8.50,quantity:4},
    {title: "Banane", price: 6.50,quantity:8}
    ];

  constructor(private catalogService: CatalogService) { }
  
  ngOnInit(): void {
    this.catalogObservable = this.catalogService.getCatalog();
  }

  

}
