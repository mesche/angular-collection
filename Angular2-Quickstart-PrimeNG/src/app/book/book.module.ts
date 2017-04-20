import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonModule, CalendarModule, CheckboxModule, DataTableModule, DialogModule, InputTextModule, MessagesModule} from 'primeng/primeng';

// Modules
import {SharedModule} from './../shared/shared.module';
import {BookFormDialogComponent} from './component/form-dialog/book-form-dialog.component';
// Components
import {BookListComponent} from './component/list/book-list.component';
// Services
import {BookService} from './service/book.service';

@NgModule({
  imports: [
    BrowserModule, ButtonModule, CheckboxModule, MessagesModule, InputTextModule, DataTableModule,
    DialogModule, CalendarModule, SharedModule
  ],
  declarations: [BookListComponent, BookFormDialogComponent],
  providers: [BookService],
  exports: [BookListComponent, BookFormDialogComponent]
})

export class BookModule {
}
