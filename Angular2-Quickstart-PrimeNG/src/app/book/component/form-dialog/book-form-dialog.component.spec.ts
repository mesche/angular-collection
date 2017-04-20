// https://angular.io/docs/ts/latest/guide/testing.html#!#shallow-component-test
// Add NO_ERRORS_SCHEMA to the testing module's schemas metadata
// to tell the compiler to ignore unrecognized elements and attributes.
// You no longer have to declare irrelevantn components and directives.
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import {CheckboxModule} from 'primeng/primeng';

import {SharedModule} from './../../../shared/shared.module';
import {BookService} from './../../service/book.service';
import {BookFormDialogComponent} from './../form-dialog/book-form-dialog.component';

describe('BookFormDialogComponent', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          //
          schemas: [NO_ERRORS_SCHEMA],
          imports: [CheckboxModule, SharedModule],
          providers: [BookService],
          declarations: [BookFormDialogComponent]
        })
        .compileComponents();
  }));

  it('should create the component', async(() => {
       const fixture = TestBed.createComponent(BookFormDialogComponent);
       const comp = fixture.debugElement.componentInstance;
       expect(comp).toBeTruthy();
     }));

  it('should instantiate component', () => {
    const fixture = TestBed.createComponent(BookFormDialogComponent);
    const comp = fixture.componentInstance;
    expect(comp instanceof BookFormDialogComponent)
        .toBe(true, 'should create BookFormDialogComponent');
  });

  it(`should have a form instance`, fakeAsync(() => {
       const fixture = TestBed.createComponent(BookFormDialogComponent);
       const comp = fixture.debugElement.componentInstance;
       comp.ngOnInit();
       tick();
       expect(comp.bookForm).toBeDefined();
     }));
});
