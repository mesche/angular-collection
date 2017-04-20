import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';

// Components
import {AppComponent} from './app.component';

// Services
import {BookService} from './book/service/book.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
