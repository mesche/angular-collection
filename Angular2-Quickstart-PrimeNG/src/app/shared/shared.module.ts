import {CommonModule} from '@angular/common';
import {LOCALE_ID, ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {StringReplacePipe} from './pipe/stringreplace.pipe';

@NgModule({
  declarations: [StringReplacePipe],
  exports: [StringReplacePipe, FormsModule, ReactiveFormsModule, HttpModule]
})

export class SharedModule {
  /**
   * Call forRoot only in the root application module, AppModule.
   * Calling it in any other module, particularly in a lazy-loaded module,
   * is contrary to the intent and can produce a runtime error.
   *
   * https://angular.io/docs/ts/latest/guide/ngmodule.html#!#core-for-root
   */
  public static forRoot(localIDValue: string): ModuleWithProviders {
    return { ngModule: SharedModule, providers: [{ provide: LOCALE_ID, useValue: localIDValue }] };
  }
}
