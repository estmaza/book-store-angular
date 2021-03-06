import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

// Models
import { Book } from '../../shared/models/book';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Injectable()
export class BookService {
  private API_PATH = 'http://localhost:5000/api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_PATH);
  }

  getBook(id: number): Observable<Book> {
    let url = `${this.API_PATH}/${id}`;
    return this.http.get<Book>(url);
  }

  getOptions(): Observable<IMultiSelectOption[]> {
    let url = `${this.API_PATH}/options`;
    return this.http.get<IMultiSelectOption[]>(url);
  }

  post(model: Book): Observable<Book> {
    return this.http.post<Book>(this.API_PATH, model);
  }

  put(model: Book): Observable<boolean> {
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
