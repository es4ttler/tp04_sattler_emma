import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../core/Client';

@Component({
  selector: 'app-composant-recap',
  templateUrl: './composant-recap.component.html',
  styleUrls: ['./composant-recap.component.css']
})
export class ComposantRecapComponent {

  constructor() { }

  @Input() client:Client = new Client();

}
