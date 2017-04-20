// https://angular.io/docs/ts/latest/guide/testing.html#!#shallow-component-test
// Add NO_ERRORS_SCHEMA to the testing module's schemas metadata
// to tell the compiler to ignore unrecognized elements and attributes.
// You no longer have to declare irrelevantn components and directives.
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {async, TestBed} from '@angular/core/testing';
import {CheckboxModule} from 'primeng/primeng';

import {SharedModule} from './../../../shared/shared.module';
import {BookService} from './../../service/book.service';
import {BookFormDialogComponent} from './../form-dialog/book-form-dialog.component';
import {BookListComponent} from './book-list.component';

describe('BookListComponent', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          //
          schemas: [NO_ERRORS_SCHEMA],
          imports: [CheckboxModule, SharedModule],
          providers: [BookService],
          declarations: [BookListComponent, BookFormDialogComponent]
        })
        .compileComponents();
  }));

  it('should create the component', async(() => {
       const fixture = TestBed.createComponent(BookListComponent);
       const comp = fixture.debugElement.componentInstance;
       expect(comp).toBeTruthy();
     }));

  it('should instantiate component', () => {
    const fixture = TestBed.createComponent(BookListComponent);
    const comp = fixture.componentInstance;
    expect(comp instanceof BookListComponent).toBe(true, 'should instantiate component');
  });

  it(`should have form dialog child compoment`, async(() => {
       const fixture = TestBed.createComponent(BookListComponent);
       const comp = fixture.debugElement.componentInstance;
       expect(comp.bookFormDialogComp).toBeDefined();
     }));

  it('should render heading in a h2 tag', async(() => {
       const fixture = TestBed.createComponent(BookListComponent);
       fixture.detectChanges();
       const compiled = fixture.debugElement.nativeElement;
       expect(compiled.querySelector('h2').textContent).toContain('book list');
     }));
});
