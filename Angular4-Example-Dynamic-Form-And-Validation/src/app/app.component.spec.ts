import {async, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BookService} from './book/service/book.service';
import {DynaFormBuilder} from './dyna/dyna-form.builder';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          //
          imports: [FormsModule, ReactiveFormsModule, HttpModule],
          declarations: [AppComponent],
          providers: [BookService, DynaFormBuilder],
        })
        .compileComponents();
  }));

  it('should create the app', async(() => {
       const fixture = TestBed.createComponent(AppComponent);
       const app = fixture.debugElement.componentInstance;
       expect(app).toBeTruthy();
     }));

  it('should render title in a h1 tag', async(() => {
       const fixture = TestBed.createComponent(AppComponent);
       fixture.detectChanges();
       const compiled = fixture.debugElement.nativeElement;
       expect(compiled.querySelector('h1').textContent).toContain('Dynamic Form & Validation');
     }));
});
