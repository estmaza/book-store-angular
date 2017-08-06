import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Author } from '../models/author';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

// TODO Try to create generic base class
@Injectable()
export class AuthorService {
  private API_PATH = 'http://localhost:5000/api/authors';

  constructor(private http: Http) { }

  // TypeScript doesn't support method overloads so I can't call them get() and get(id: number)
  getAuthors(): Observable<Author[]> {
    return this.http.get(this.API_PATH)
      .map(res => res.json().data || []);
  }

  getAuthor(id: number): Observable<Author> {
    return null;
  }

  // TODO maybe I should return bool as succeeded/failed
  post(model: Author): void {
    //add
  }

  put(model: Author): void {
    //update
  }

  delete(id: number): void {
    console.log('delete api call does not implemented. AuthorId = ' + id);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error: ', error);
    return Promise.reject(error.message || error);
  }
}
