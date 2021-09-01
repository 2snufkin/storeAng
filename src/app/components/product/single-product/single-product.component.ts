import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../../models/product';
import {Carte} from '../../../models/Carte';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  @Input() productName: string;
  @Input() description: string;
  @Input() image: string;
  @Input() price: number;
  @Input() id: number;
  @Input() productObj: Product;

  constructor(private router: Router, private carteService: CartService) {
  }

  ngOnInit(): void {
  }

  onDetail(name: string, id: number): void {
    this.router.navigate(['products', name, id]);
  }

  onClick(productToadd: Product): void {
    // take the product and transform it into a cart item
    const carteObj = new Carte(productToadd);
    this.carteService.addItem(carteObj);
  }

}
