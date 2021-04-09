import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../modules/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];


  constructor(private productS: ProductService) {
  }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productS.getProductList().subscribe(data => this.products = data);
  }

}
