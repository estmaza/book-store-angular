import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Book } from 'app/shared/models/book';

@Component({
  selector: 'book-item',
  templateUrl: 'book-item.component.html'
})

export class BookItemComponent implements OnInit {
  origin: Book;

  @Input() model: Book;

  // Item component is for the existed items. Only update/delete operations can be performed.
  @Output() update: EventEmitter<Book> = new EventEmitter();
  @Output() delete: EventEmitter<Book> = new EventEmitter();

  form = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    date: new FormControl(),
    rating: new FormControl(),
    pages: new FormControl(),
    authors: new FormControl()
  });

  constructor() { }

  ngOnInit() {
    this.origin = this.model;
  }


}