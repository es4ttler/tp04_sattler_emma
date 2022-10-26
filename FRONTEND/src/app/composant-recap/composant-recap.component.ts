import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../core/Client';
import { ServiceTestService } from '../service-test.service';

@Component({
  selector: 'app-composant-recap',
  templateUrl: './composant-recap.component.html',
  styleUrls: ['./composant-recap.component.css']
})
export class ComposantRecapComponent {

  constructor(public ts: ServiceTestService) {
    ts.getCatalogue();
  }

  @Input() client:Client = new Client();

}
