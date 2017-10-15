import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { Author } from '../../shared/models/author';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

// TODO Try to create generic base class
@Injectable()
export class AuthorService {
  private API_PATH = 'http://localhost:5000/api/authors';

  constructor(private http: HttpClient) { }

  // TypeScript doesn't support method overloads so I can't call them get() and get(id: number)
  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.API_PATH);
  }

  getAuthor(id: number): Observable<Author> {
    let url = `${this.API_PATH}/${id}`;
    return this.http.get<Author>(url);
  }

  getOptions(): Observable<IMultiSelectOption[]> {
    let url = `${this.API_PATH}/options`;
    let result = this.http.get<IMultiSelectOption[]>(url);
    return result;
  }

  post(model: Author): Observable<Author> {
    return this.http.post<Author>(this.API_PATH, model);
  }

  put(model: Author): Observable<boolean> {
    let url = `${this.API_PATH}/${model.id}`;
    return this.http.put<boolean>(url, model);
  }

  delete(id: number): Observable<boolean> {
    let url = `${this.API_PATH}/${id}`;
    return this.http.delete<boolean>(url);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error: ', error);
    return Promise.reject(error.message || error);
  }
}
