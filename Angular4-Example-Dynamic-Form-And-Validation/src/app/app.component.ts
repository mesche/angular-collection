import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Book} from './book/model/book.model';
import {BookService} from './book/service/book.service';
import {DynaFormBuilder} from './dyna/dyna-form.builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public bookJS: Book;
  public bookSpec: Book;

  public bookForm: FormGroup;

  constructor(private bookService: BookService, public dynaFB: DynaFormBuilder) {}

  public ngOnInit() {
    this.bookForm = this.dynaFB.buildFormFromClass(Book);

    this.bookService.getBooksSpec().then(books => {
      this.bookSpec = books[0];
      console.log('getBooksSpec() - list loaded - size: ' + books.length);
      this.bookForm.patchValue(this.bookSpec);
    });
  }
}
