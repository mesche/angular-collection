
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';

// Components
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, JsonpModule],

  bootstrap: [AppComponent]
})
export class AppModule {
}
