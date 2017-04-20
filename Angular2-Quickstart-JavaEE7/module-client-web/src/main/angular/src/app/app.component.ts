
import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

// Models
import {Book} from './models/book';
// Services
import {BookService} from './services/book.service';
import {BrowserEnvService} from './services/browserenv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BookService, BrowserEnvService],
})

export class AppComponent implements OnInit {
  // Local properties
  public books: Book[];
  public title = 'app works!';

  public restForm = new FormGroup({ restURL: new FormControl('', Validators.required) });

  constructor(private bookService: BookService, browserEnvService: BrowserEnvService) {
    const baseURL: string = browserEnvService.getBaseURL() +
        '/angular2-qickstart-javaee7-application/api/rest/v1/books/list';
    this.restForm.controls['restURL'].setValue(baseURL);
  }

  ngOnInit() {
    console.log('init AppComponent');
  }

  performSubmitRestForm({ value, valid }) {
    this.loadBooks(this.restForm.value.restURL);
  };

  // Get all books from rest service
  private loadBooks(url: string) {
    this.bookService.getBooks(url).subscribe(
        books => this.books = books,  // Bind return value to view
        err => {
          console.log(err);
        });
  }
}
