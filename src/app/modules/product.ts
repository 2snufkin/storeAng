export class Product {
  id: number;
  active: boolean;
  stockUnites: number;
  dateCreated: Date;
  dateModified: Date;
  image: string;
  description: string;
  name: string;
  asin: string;
  unitPrice: number;
  categories: number;

  //
  // constructor(public name: string, public asin: string, public image: string,
  //             public description: string, public unitPrice: number, public category: number) {
  //   this.active = true;
  //   this.stockUnites = Math.floor(Math.random() * 10000);
  //   this.dateCreated = new Date(Date.now());
  // }
 }
