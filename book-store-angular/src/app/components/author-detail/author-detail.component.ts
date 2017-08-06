import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../../models/author';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author;
  @Output() canceled: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() { }

  cancel(): void {
    this.canceled.emit(null);
  }

}
