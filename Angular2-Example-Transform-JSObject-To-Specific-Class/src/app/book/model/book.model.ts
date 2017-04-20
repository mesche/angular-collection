import {Validators} from '@angular/forms';
import {Transform, Type} from 'class-transformer';

import {Author} from './author.model';

export class Book {
  public id: number;

  @Type(() => String)
  public title: string;

  @Type(() => Author)
  public author: Author;

  @Type(() => Boolean)
  public inStock: Boolean;
  public price: string;
  public language: string;
  public isbn: string;


  //@Type(() => Date)
  @Transform(value => (value.getTime() / 1000), { toPlainOnly: true })
  @Transform(value => new Date(value * 1000), { toClassOnly: true })
  public release: Date;

  constructor(data?: any) {
    data = data || {};
    this.id = data.id || 0;
    this.title = data.title || null;
    this.author = data.author || null;
    this.inStock = data.inStock || false;
    this.price = data.price || null;
    this.language = data.language || null;
    this.isbn = data.isbn || null;
    if (data.release) {
      this.release = (data.release instanceof Date) ? data.release : new Date(data.release * 1000);
    } else {
      this.release = null;
    }
  }

  public helloWorld(): String {
    return 'hello world';
  }
}
