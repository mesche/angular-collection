import 'rxjs/add/operator/toPromise';

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';

import {Book} from './../model/book.model';
import {BookJSON} from './../model/bookjson.interface';

@Injectable()
export class BookService {
  private static readonly DATA_BOOKS_PATH = './../../assets/data/books.json';

  private books: Book[];

  public booksChanged = new Subject<Book[]>();

  constructor(private http: Http) {}

  public getBooks(): Promise<Book[]> {
    // Uses http.get() to load the books JSON file
    return this.http.get(BookService.DATA_BOOKS_PATH)
        .toPromise()
        .then((res: Response) => <BookJSON[]>res.json().data)
        .then(data => {
          this.books = this.transformJsonToModel(data);
          return this.books;
        });
  }

  private transformJsonToModel(booksJson: BookJSON[]): Book[] {
    let newBooks: Book[] = [];

    for (let book of booksJson) {
      newBooks.push(new Book(book));
    }
    return newBooks;
  }

  public deleteBook(book: Book) {
    const idx: number = this.findBookIndex(book);
    this.books.splice(idx, 1);
    this.booksChanged.next(this.books);
  }

  public saveBook(book: Book) {
    if (!book.id) {
      book.id = this.books.length + 1;
      this.books.push(book);
    } else {
      const idx: number = this.findBookIndex(book);
      this.books[idx] = book;
    }
    this.booksChanged.next(this.books);
  }

  private findBookIndex(book: Book): number {
    let idx = -1;
    let count = 0;

    for (const bKey in this.books) {
      if (this.books.hasOwnProperty(bKey)) {
        if (this.books[bKey].id === book.id) {
          idx = count;
          break;
        }
        count++;
      }
    }
    return idx;
  }
}
