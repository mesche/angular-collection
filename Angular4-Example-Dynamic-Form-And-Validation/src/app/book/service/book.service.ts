import 'rxjs/add/operator/toPromise';

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {plainToClass} from 'class-transformer';
import {Subject} from 'rxjs/Subject';

import {Book} from './../model/book.model';

@Injectable()
export class BookService {
  private static readonly DATA_BOOKS_PATH = './../../assets/data/books.json';

  constructor(private http: Http) {}

  public getBooksJS(): Promise<Book[]> {
    // Uses http.get() to load the books JSON file
    return this.http.get(BookService.DATA_BOOKS_PATH)
        .toPromise()
        .then((res: Response) => <Book[]>res.json().data);
  }

  public getBooksSpec(): Promise<Book[]> {
    // Uses http.get() to load the books JSON file
    return this.http.get(BookService.DATA_BOOKS_PATH)
        .toPromise()
        .then((res: Response) => res.json().data)
        .then(data => plainToClass(Book, data as Book[]))
        .then(data => {
          return data;
        });
  }
}
