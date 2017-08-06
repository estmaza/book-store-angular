import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Author } from '../../models/author';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  @Input() authors: Observable<Author[]>;
  @Output() selected: EventEmitter<Author> = new EventEmitter();
  @Output() deleted: EventEmitter<Author> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onSelect(author: Author): void {
    this.selected.emit(author);
  }

  onDelete(author: Author): void {
    this.deleted.emit(author);
  }

}
