import {Component, OnInit, Input} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../modules/product';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {PageEvent} from '@angular/material/paginator';
import {Observable} from 'rxjs';

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
// MatPaginator Inputs
  length = 0;
  pageSize = 8; // how many per page
  pageIndex = 0; // current page
  numberOfPages = 0;
  pageSizeOptions: number[] = [8, 14, 16, 20];

  ngOnInit(): void {

    this.listProducts().pipe(
      map(responseObg => {
          this.length = responseObg.page.totalElements;
          return responseObg._embedded.products;
        }
      ))
      .subscribe(data => this.products = data);
  }


  listProducts(): Observable<GetResponse> {
    return this.route.paramMap.pipe(
      switchMap(params => {
        if (params.has('id')) {
          this.pageIndex = 0;
          this.currentID = +params.get('id');
          return this.productS.getProductListByCat(this.currentID, this.pageSize, this.pageIndex);
        }
        if (params.has('name')) {
          return this.productS.getProductListByName(params.get('name'));
        } else {
          return this.productS.getAllproducts();
        }
      })
    );
  }


  handlePageEvent(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.productS.getProductListByCat(this.currentID, this.pageSize, this.pageIndex)
      .subscribe(data => {
        this.products = data._embedded.products;

      });
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  };
  page: {
    totalElements: number,
    totalPages: number,
    number: number
  };
}


