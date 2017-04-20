import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';

// Components
import {AppComponent} from './app.component';
// Services
import {BookService} from './book/service/book.service';
import {DynaFormBuilder} from './dyna/dyna-form.builder';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule],
  providers: [BookService, DynaFormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule {
}
