import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/product';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../../../services/cart.service';
import {Carte} from '../../../models/Carte';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();

  constructor(private productServ: ProductService, private currenturl: ActivatedRoute, private carteService: CartService) {
  }

  ngOnInit(): void {
    this.currenturl.paramMap.subscribe(params => this.productServ.getProductById(+params.get('id'))
      .subscribe(product => this.product = product
      ));
  }

  /**
   * Add a product to the cart
   * @param: productToadd
   */
  onAddToCart(productToadd: Product): void {
    // take the product and transform it into a cart item
    const carteObj = new Carte(productToadd);
    this.carteService.addItem(carteObj);
  }

}
