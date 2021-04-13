import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../modules/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  catergoryId: number;
  const hasId: boolean;

  constructor(private productS: ProductService, private route: ActivatedRoute) {
  }
   //When its initialize on a /product/category/2 for example. I want to recuperate the id
   ngOnInit(): void {
    this.catergoryId = this.route.paramMap.subscribe()
    this.listProducts();
  }
  hasId = this.route.snapshot.paramMap.has(+'id')
  listProducts() {
    this.productS.getProductList().subscribe(data => this.products = data);
  }

}
