import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from './../../../environments/environment';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HttpService extends HttpClient {
  constructor(private httpHandler: HttpHandler) {
    super(httpHandler);
  }

  /*
  Why I can't currently implement extended HttpService
  
  Idea was to override existed get, post, put, delete methods to provide unified error handling, success/failure behavior, etc.
  Example from AngularSpree uses old Http module but I'm using new HttpClient module
  Old module execute requests immediately, the new one provides a blueprints (you have to call subscribe() method to execute a request). 
  All responce processors must be stored inside subscribe()
  subscribe method returns value of "subscription" type.
  overriding the HttpClient require Observable<any> as a return value.

  Possible desitions:
  1. use an old HttpModule
  2. create simple class that will implement only unified subscribe() method with onSubscribeSuccess, onSubscribeError helpers
  3. start working with ngrx/store and try to find better approach.

  */
  
  get(url: string): Observable<any> {
    super.get(this.getUrl(url))
      .subscribe(
      data => { },
      (err: HttpErrorResponse) => {

      },

    );
    // problem
    return new Observable<any>();
  }

  private getUrl(url: string): string {
    return environment.API_ENDPOINT + url;
  }
}