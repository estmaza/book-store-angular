import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/models/book';
import { Author } from '../shared/models/author';

@Component({
  selector: 'app-books',
  templateUrl: 'books.component.html'
})

export class BooksComponent implements OnInit {
  constructor() { }

  ngOnInit() { }


}