import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CatalogService } from '../catalog.service';
import { Catalog } from '../core/Catalog';

@Component({
  selector: 'app-composant-catalog',
  templateUrl: './composant-catalog.component.html',
  styleUrls: ['./composant-catalog.component.css']
})
export class ComposantCatalogComponent implements OnInit {
  
  catalog: Catalog[] = [];
  subscription: Subscription;
  constructor(public catalogService: CatalogService) {
    this.subscription = this.getCatalog();
  }

  ngOnInit(): void {}

  getCatalog(): Subscription {
    return this.catalogService.getCatalog().subscribe((items) => {
      this.catalog = items;
    });
  }
  updateCatalog(items: Catalog[]) {
    this.catalog = items;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
