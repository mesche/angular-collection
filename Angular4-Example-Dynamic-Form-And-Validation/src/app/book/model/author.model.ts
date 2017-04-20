import {Transform, Type} from 'class-transformer';
import {IsNotEmpty, IsNumber, IsPositive, Max, Min} from 'class-validator';

export class Author {
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  public id: Number;

  @IsNotEmpty()
  @Max(255)
  @Min(3)
  @Type(() => String)
  public name: String;

  @IsNotEmpty()
  @Min(3)
  @Max(255)
  @Type(() => String)
  public surename: String;

  constructor(data?: any) {
    data = data || {};
    this.id = data.id || null;
    this.name = data.name || null;
    this.surename = data.surename || null;
  }
}
