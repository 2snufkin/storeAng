import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../modules/product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productS: ProductService, private route: ActivatedRoute, private router: Router) {
  }

  products: Product[];
  currentID: number;
  hasId: boolean;

  // When its initialize on a /product/category/2 for example. I want to recuperate the id
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts(): void {
    this.hasId = this.route.snapshot.paramMap.has('id');

    if (this.hasId) {
      this.currentID = +this.route.snapshot.paramMap.get('id');

      this.productS.getProductListByCat(this.currentID).subscribe(data => this.products = data);

    } else {
      this.productS.getProductList().subscribe(data => this.products = data);
    }

  }

}

