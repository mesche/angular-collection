import {Validators} from '@angular/forms';

export class Book {
  public id: number;
  public title: string;
  public author: string;
  public inStock: boolean;
  public price: string;
  public language: string;
  public isbn: string;
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
}
