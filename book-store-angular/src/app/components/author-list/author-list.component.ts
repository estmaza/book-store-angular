import { Component, OnInit } from '@angular/core';

import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author';

@Component({
  selector: 'author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  selectedAuthor: Author;
  authors: Author[];

  constructor(private service: AuthorService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(): void {
    this.service.getAuthors().then(p => this.authors = p);
  }

}
