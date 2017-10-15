import { Component, Input } from '@angular/core';

/* Models */
import { GridHead } from '../models/grid-head';

@Component({
  selector: 'grid-head',
  templateUrl: 'grid-head.component.html'
})

export class GridHeadComponent {
  @Input() columns: GridHead[]

  constructor() { }
}