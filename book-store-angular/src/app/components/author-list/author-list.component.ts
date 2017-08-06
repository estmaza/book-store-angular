import { Component, OnInit } from '@angular/core';

import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  selectedAuthor: Author;
  authors: Observable<Author[]>;

  constructor(private service: AuthorService) { }

  ngOnInit(): void {
    this.authors = this.getAuthors();
  }

  getAuthors(): Observable<Author[]> {
    console.log(this.service.getAuthors());
    console.log(typeof(this.service.getAuthors()));
    return this.service.getAuthors();
  }

}
