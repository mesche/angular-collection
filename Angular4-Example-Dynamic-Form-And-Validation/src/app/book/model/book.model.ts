import {Transform, Type} from 'class-transformer';
import {IsCurrency, IsDate, IsISBN, IsNotEmpty, IsNumber, IsPositive, Length, ValidateNested} from 'class-validator';

import {Author} from './author.model';

export class Book {
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  public id: Number;

  @Length(8, 255)
  @Type(() => String)
  public title: String;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => Author)
  public author: Author;

  @IsNotEmpty()
  @Type(() => Boolean)
  public inStock: Boolean;

  @IsNotEmpty()
  @IsCurrency()
  public price: String;

  @IsNotEmpty()
  public language: String;

  @IsNotEmpty()
  @IsISBN()
  public isbn: String;

  @IsDate()
  @IsNotEmpty()
  @Transform(value => (value.getTime() / 1000), { toPlainOnly: true })
  @Transform(value => isNaN(value) ? null : new Date(value * 1000), { toClassOnly: true })
  // @Type(() => Date)
  public release: Date;

  constructor(data?: any) {
    data = data || {};
    this.id = data.id || null;
    this.title = data.title || null;
    this.inStock = data.inStock || false;
    this.price = data.price || null;
    this.language = data.language || null;
    this.isbn = data.isbn || null;

    if (data.author) {
      this.author = data.author;
    }

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
