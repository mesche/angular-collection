import {Component, OnDestroy, OnInit} from '@angular/core';
import {classToPlain} from 'class-transformer';

import {Book} from './book/model/book.model';
import {BookService} from './book/service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public bookJS: Book;
  public bookSpec: Book;

  constructor(private bookService: BookService) {}

  public ngOnInit() {
    this.bookService.getBooksJS().then(books => {
      this.bookJS = books[0];
      console.log('getBooksJS() - list loaded - size: ' + books.length);
    });

    this.bookService.getBooksSpec().then(books => {
      this.bookSpec = books[0];
      console.log('getBooksSpec() - list loaded - size: ' + books.length);
    });
  }

  public ngOnDestroy() {}


  public findTypeOf(obj: any) {
    return typeof obj;
  }

  public transformToJSON(obj): any {
    let json = classToPlain(obj);
    return json;
  }
}