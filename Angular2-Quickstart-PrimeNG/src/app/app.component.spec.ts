import {async, TestBed} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {BookModule} from './book/book.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          //
          imports: [BookModule],
          declarations: [AppComponent]
        })
        .compileComponents();
  }));

  it('should create the app', async(() => {
       const fixture = TestBed.createComponent(AppComponent);
       const app = fixture.debugElement.componentInstance;
       expect(app).toBeTruthy();
     }));

  it('should instantiate component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app instanceof AppComponent).toBe(true, 'should instantiate component');
  });

  it(`should have as title 'Angular2PrimeNGQuickstart'`, async(() => {
       const fixture = TestBed.createComponent(AppComponent);
       const app = fixture.debugElement.componentInstance;
       expect(app.title).toEqual('Angular2-Quickstart-PrimeNG works!');
     }));

  it('should render heading in a h2 tag', async(() => {
       const fixture = TestBed.createComponent(AppComponent);
       fixture.detectChanges();
       const compiled = fixture.debugElement.nativeElement;
       expect(compiled.querySelector('h2').textContent).toContain('book list');
     }));
});
