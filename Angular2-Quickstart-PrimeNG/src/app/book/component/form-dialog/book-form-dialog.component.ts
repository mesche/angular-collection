import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Book} from './../../model/book.model';
import {BookService} from './../../service/book.service';

@Component({
  selector: 'app-book-form-dialog',
  templateUrl: './book-form-dialog.component.html',
  styleUrls: ['./book-form-dialog.component.scss']
})

export class BookFormDialogComponent implements OnInit, OnChanges {
  @Input()
  public currentBook: Book;

  public displayDialog: boolean;

  public bookForm: FormGroup;

  constructor(private bookService: BookService, private fb: FormBuilder) {}

  /**
   * Init the book form.
   */
  public ngOnInit() {
    console.log('init BookFormComponent');

    this.bookForm = this.fb.group({
      id: [null, Validators.required],
      title: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      author: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      inStock: [false, Validators.required],
      price: [null, Validators.required],
      language: [null, Validators.required],
      isbn: [null, Validators.required],
      release: [null, Validators.required]
    });
  }


  /**
   * If the book form is valid, set the book data from the form into
   * the object and call the book service to save it.
   * Finally close the book form dialog.
   */
  public saveBook() {
    if (this.bookForm.valid) {
      Object.assign(this.currentBook, this.bookForm.value);
      this.bookService.saveBook(this.currentBook);
      this.closeDialog();
    }
  }

  /**
   * Call the bookservice to delete the current selected book
   */
  public deleteBook() {
    this.bookService.deleteBook(this.currentBook);
    this.closeDialog();
  }

  /**
   * Show the dialog with the book form
   */
  public showDialog() {
    this.displayDialog = true;
  }

  /**
   * Reset current book and form and close the dialog with the book form.
   */
  public closeDialog() {
    this.currentBook = null;
    this.bookForm.reset();
    this.displayDialog = false;
  }

  /**
   * This function is called right after the data-bound properties have been
   * checked and before view and content children are checked if at least one
   * of them has changed.
   *
   * @param changes
   */
  public ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const p in changes) {
      if (changes.hasOwnProperty(p)) {
        const c = changes[p];
        const from = JSON.stringify(c.previousValue);
        const to = JSON.stringify(c.currentValue);
        // console.log(`${p} changed from ${from} to ${to}`);
        console.log(`${p} changed from ${c.previousValue.id} to ${c.currentValue.id}`);
      }
    }
    if (this.bookForm) {
      console.log('patch changed book: ' + this.bookForm + ' - ' + this.currentBook.title);
      this.bookForm.patchValue(this.currentBook);
    }
  }
}
