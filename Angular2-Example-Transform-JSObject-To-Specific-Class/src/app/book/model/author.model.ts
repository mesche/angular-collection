import {Validators} from '@angular/forms';
import {Transform, Type} from 'class-transformer';

export class Author {
  public id: number;

  public name: string;
  public surename: string;

  constructor(data?: any) {
    data = data || {};
    this.id = data.id || 0;
    this.name = data.name || null;
    this.surename = data.surename || null;
  }
}
