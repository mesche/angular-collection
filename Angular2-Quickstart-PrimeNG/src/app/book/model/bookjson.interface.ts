export interface BookJSON {
  id: number;
  title: string;
  author: string;
  inStock: boolean;
  price: string;
  language: string;
  isbn: string;
  release: number;  // unix timestamp
}
