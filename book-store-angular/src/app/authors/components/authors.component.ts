import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/* Models */
import { Author } from 'app/shared/models/author';

/* Third Party */
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

/* Serveces */
import { AuthorService } from 'app/core/services/author.service';
import { BookService } from 'app/core/services/book.service';

@Component({
  selector: 'app-authors',
  templateUrl: 'authors.component.html'
})

export class AuthorsComponent implements OnInit {
  selectedAuthor: Author;
  options: Observable<IMultiSelectOption[]>;
  authors: Observable<Author[]>;

  constructor(
    private service: AuthorService,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.authors = this.getAuthors();
    this.options = this.getBookOptions();
  }

  getAuthors(): Observable<Author[]> {
    return this.service.getAuthors();
  }

  getBookOptions(): Observable<IMultiSelectOption[]> {
    return this.bookService.getOptions();
  }

  select(author: Author): void {
    this.selectedAuthor = author;
  }

  cancel(): void {
    this.selectedAuthor = null;
  }

  delete(author: Author): void {
    this.service.delete(author.id).subscribe();
  }

  save(author: Author): void {
    console.log('save from author page ' + author.firstName);
    let result;
    if (author.id == 0) {
      this.service.post(author).subscribe();
    } else {
      this.service.put(author).subscribe();
    }
    this.selectedAuthor = null;
  }

  create(): void {
    this.selectedAuthor = new Author();
  }
}