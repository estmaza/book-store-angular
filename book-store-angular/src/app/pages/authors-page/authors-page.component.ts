import { Component, OnInit } from '@angular/core';

import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-authors-page',
  templateUrl: './authors-page.component.html',
  styleUrls: ['./authors-page.component.css']
})
export class AuthorsPageComponent implements OnInit {
  selectedAuthor: Author;
  authors: Observable<Author[]>;

  constructor(private service: AuthorService) { }

  ngOnInit() {
    this.authors = this.getAuthors();
  }

  getAuthors(): Observable<Author[]> {
    return this.service.getAuthors();
  }

  add(): void {
    //this.selectedAuthor = new Author();
  }

  select(author: Author): void {
    this.selectedAuthor = author;
  }

  cancel(): void {
    this.selectedAuthor = null;
  }

  delete(author: Author): void {
    this.service.delete(author.id);
  }

}
