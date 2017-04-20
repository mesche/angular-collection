import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {Book} from '../models/book';

@Injectable()
export class BookService {
  constructor(private http: Http) {}

  getBooks(serviceGetBooksUrl: string): Observable<Book[]> {
    console.log(serviceGetBooksUrl);
    const books = this.http.get(serviceGetBooksUrl).map(this.extractData).catch(this.handleError);

    return books;
  }


  private extractData(resp: Response) {
    const data = resp.json() || {};
    return data;
  }

  private handleError(error: Response|any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    errMsg = error.message ? error.message : error.toString();
    console.error('Error: ' + errMsg);
    return Observable.throw(errMsg);
  }
}
