import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthorService } from 'app/core/services/author.service';
import { BookService } from 'app/core/services/book.service';

import { Book } from '../shared/models/book';
import { Author } from '../shared/models/author';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-books',
  templateUrl: 'books.component.html'
})

export class BooksComponent implements OnInit {
  books: Observable<Book[]>;
  options: Observable<IMultiSelectOption[]>;
  columns: string[] = columnNames;
  
  constructor(
    private service: BookService, 
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    // Suggestion: no need to create separated methods like getBooks(). 
    // This operations uses only once.
    this.books = this.service.getBooks();
    this.options = this.authorService.options();
  }
}

const columnNames: string[] = [
  'Id',
  'Name',
  'Date',
  'Rating',
  'Pages',
  'Authors',
  '' // Action buttons column
]