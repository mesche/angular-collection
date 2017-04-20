import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {Book} from './../../model/book.model';
import {BookService} from './../../service/book.service';
import {BookFormDialogComponent} from './../form-dialog/book-form-dialog.component';

@Component({
  selector: 'app-book-list-component',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

export class BookListComponent implements OnInit, OnDestroy {
  @ViewChild(BookFormDialogComponent)
  bookFormDialogComp: BookFormDialogComponent;

  public book: Book = new Book();
  public selectedBook: Book;
  public books: Book[];

  private booksChangedSubscription: Subscription;

  constructor(private bookService: BookService) {}

  public ngOnInit() {
    this.bookService.getBooks().then(books => {
      this.books = books;
      console.log('Book list loaded - size: ' + this.books.length);
    });

    this.booksChangedSubscription = this.bookService.booksChanged.subscribe((value) => {
      console.log('Subscription: books changed: ' + value[0].title);
      this.books = value;
    });
  }

  public showDialogToAdd() {
    this.selectedBook = null;
    this.book = new Book();
    this.bookFormDialogComp.showDialog();
  }

  public onRowSelect(eventData) {
    this.book = this.cloneBook(eventData);
    this.bookFormDialogComp.showDialog();
  }

  private cloneBook(c: Book): Book {
    const book = new Book();
    for (const prop in c) {
      if (c.hasOwnProperty(prop)) {
        book[prop] = c[prop];
      }
    }
    return book;
  }

  public ngOnDestroy() {
    if (this.booksChangedSubscription) {
      this.booksChangedSubscription.unsubscribe();
    }
  }
}
