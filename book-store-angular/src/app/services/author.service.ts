import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Author } from '../models/author';

// TODO Try to create generic base class
@Injectable()
export class AuthorService {
  private API_PATH = 'http://localhost:5000/api/authors';

  constructor(private http: Http) { }

  // TypeScript doesn't support method overloads so I can't call them get() and get(id: number)
  getAuthors(): Promise<Author[]> {
    return this.http.get(this.API_PATH)
      .toPromise()
      .then(response => response.json() as Author[])
      .catch(this.handleError);
  }

  getAuthor(id: number): Promise<Author> {
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

  }

  private handleError(error: any): Promise<any> {
    console.error('Error: ', error);
    return Promise.reject(error.message || error);
  }
}
