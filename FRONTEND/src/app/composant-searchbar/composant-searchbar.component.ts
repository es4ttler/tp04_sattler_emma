import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-composant-searchbar',
  templateUrl: './composant-searchbar.component.html',
  styleUrls: ['./composant-searchbar.component.css']
})
export class ComposantSearchbarComponent {
  search : String ="";
  @Input() property: string;
  @Input() list: any[];

  @Output() filterResult = new EventEmitter<any[]>();
  @Output() filterReset = new EventEmitter();


  constructor() {
    this.search.valueChanges.subscribe((value) => {
      if (value == '') {
        this.filterReset.emit();
      }
      else {
        const newlist = this.list.filter((item) => item[this.property].includes(value));
        this.filterResult.emit(newlist);
      }
    });
  }

}
