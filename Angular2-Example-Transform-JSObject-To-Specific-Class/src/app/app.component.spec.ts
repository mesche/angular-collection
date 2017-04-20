import {async, TestBed} from '@angular/core/testing';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BookService} from './book/service/book.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          //
          imports: [HttpModule],
          declarations: [AppComponent],
          providers: [BookService]
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
       expect(compiled.querySelector('h1').textContent).toContain('Compare - JS Object');
     }));
});
