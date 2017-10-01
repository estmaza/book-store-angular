import { Component, Input } from '@angular/core';

@Component({
  selector: '.table-head',
  templateUrl: 'table-head.component.html'
})

export class TableHeadComponent {
  @Input() columns: string[]
  
  constructor() { }
}