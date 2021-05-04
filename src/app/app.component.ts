import { Component } from '@angular/core';
import {ProductService} from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storeAng';
  constructor(private productService: ProductService) {
  }
  ngOnInit() {
    this.productService.createProductfromApi();
  }
}
