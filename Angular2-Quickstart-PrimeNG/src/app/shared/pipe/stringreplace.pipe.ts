import {Pipe, PipeTransform} from '@angular/core';

/**
 * https://angular.io/docs/ts/latest/guide/pipes.html
 *
 *
 * The pipe searches a string for a specified value or a regular expression,
 * and returns a new string where the specified values are replaced.
 *
 *
 * Usage:
 *   value | stringReplace:expressionValue:newValue
 *
 * Example:
 *   {{ '2,43' | stringReplace:',':'.' }}
 *   formats to: 2.43
 *
 */
@Pipe({ name: 'stringReplace' })
export class StringReplacePipe implements PipeTransform {
  transform(value: string, exprVal: any, newVal: string): string {
    return value ? value.replace(new RegExp(exprVal, 'gi'), newVal) : value;
  }
}
