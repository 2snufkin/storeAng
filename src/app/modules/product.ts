export class Product {
  id: number;
  active: boolean;
  stockUnites: number;
  dateCreated: Date;
  dateModified: Date;


  constructor(public name: string, public asin: string, public image: string,
              public description: string, public unitPrice: number, public category: number) {
    this.active = true;
    this.stockUnites = Math.floor(Math.random() * 10000);
    this.dateCreated = new Date(Date.now());
  }
}
