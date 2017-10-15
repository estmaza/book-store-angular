import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from 'app/shared/models/book';

@Component({
  selector: 'book-item',
  templateUrl: 'book-item.component.html'
})

export class BookItemComponent implements OnInit {
  @Input() model: Observable<Book>;

  // Item component is for the existed items. Only update/delete operations can be performed.
  @Output() update: EventEmitter<Book> = new EventEmitter();
  @Output() delete: EventEmitter<Book> = new EventEmitter();

  constructor() { }

  ngOnInit() { }
}