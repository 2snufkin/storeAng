import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../modules/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();

  constructor(private productServ: ProductService, private currenturl: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currenturl.paramMap.subscribe(params => this.productServ.getProductById(+params.get('id'))
      .subscribe(product => this.product = product[0]
      ));

  }

}
