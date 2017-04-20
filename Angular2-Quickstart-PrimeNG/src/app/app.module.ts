import {NgModule} from '@angular/core';
// Modules
import {BrowserModule} from '@angular/platform-browser';

// Components
import {AppComponent} from './app.component';
import {BookModule} from './book/book.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    // put all your components / directives / pipes here
    AppComponent  // the root component
  ],
  imports: [BrowserModule, BookModule, SharedModule.forRoot('de-de')],
  bootstrap: [  // The main components to be bootstrapped in main.ts file,
                // normally one only
    AppComponent
  ]
})
export class AppModule {
}
