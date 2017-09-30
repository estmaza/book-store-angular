import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Services
import { AuthorService } from '../../core/services/author.service';
import { BookService } from '../../core/services/book.service';

// Models
import { Author } from '../../shared/models/author';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-authors-page',
  templateUrl: './authors-page.component.html',
  styleUrls: ['./authors-page.component.css']
})
export class AuthorsPageComponent implements OnInit {
  selectedAuthor: Author;
  options: Observable<IMultiSelectOption[]>;
  authors: Observable<Author[]>;

  constructor(private service: AuthorService, 
    private bookService: BookService) { }

  ngOnInit() {
    this.authors = this.getAuthors();
    this.options = this.getBookOptions();
  }

  getAuthors(): Observable<Author[]> {
    return this.service.getAuthors();
  }

  getBookOptions(): Observable<IMultiSelectOption[]> {
    return this.bookService.options();
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
