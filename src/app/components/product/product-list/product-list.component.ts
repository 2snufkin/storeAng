import {Component, OnInit, Input} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../modules/product';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productS: ProductService, private route: ActivatedRoute) {
  }

  products: Product[];
  currentID: number;
  hasId: boolean;
  searchMode: boolean;
  searchName: string;
  @Input() category: string;

  // When its initialize on a /product/category/2 for example. I want to recuperate the id

  ngOnInit(): void {
     this.listProducts().subscribe(data => {
       this.products = data;
       console.log(this.products);

     });
  }


  listProducts(): any {
   return this.route.paramMap.pipe(
      switchMap(params => {
        if (params.has('id')) {
          return this.productS.getProductListByCat(+params.get('id'));
        }
        if (params.has('name')) {
          return this.productS.getProductListByName(params.get('name'));
        } else {
          return this.productS.getAllproducts();
        }
      })
    );
  }
}


//
//
//   this.hasId = this.route.snapshot.paramMap.has('id');
//   this.searchMode = this.route.snapshot.paramMap.has('name');
//      this.currentID = +this.route.snapshot.paramMap.get('id');
//   if (this.hasId) {
//     this.productS.getProductListByCat(this.currentID).subscribe(data => this.products = data);
//   }
// //if there is a name so only the product the correspond to this name
//   if (this.searchMode) {
//     console.log('I am in search mode');
//     this.searchName = this.route.snapshot.paramMap.get('name');
//     this.productS.getProductListByName(this.searchName).subscribe(data => this.products = data);
//
//   } else {
//     this.productS.getAllproducts().subscribe(data => {
//       this.products = data;
//       console.log(data);
//
//     });
//   }
//
// }



