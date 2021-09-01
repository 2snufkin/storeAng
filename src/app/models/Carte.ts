import {Product} from './product';

export class Carte {
  id: number;
  active: boolean;
  image: string;
  name: string;
  unitPrice: number;
  quantity: number;


  constructor(product: Product) {
    this.id = product.id;
    this.image = product.image;
    this.name = product.name;
    this.unitPrice = product.unitPrice;
    this.quantity =  1;
  }
}
