import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/product';
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

  // @Input() category: string;

  products: Product[];
  currentID: number;
  hasId: boolean;
  searchMode: boolean;
  searchName: string;
  length = 0;
  pageSize = 8; // how many per page
  pageIndex = 0; // current page
  pageSizeOptions: number[] = [8, 14, 16, 20];


  constructor(private productS: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.listProducts()
      .pipe(
        map(responseObg => {
            this.length = responseObg.page.totalElements;
            return responseObg._embedded.products;
          }
        ))
      .subscribe(data => {
        this.products = data;
        console.log(data);
      });
  }

  /**
   * check for the parameters
   * if there is a categoryID parameter, GET only the products from this ID
   * if there is a name paraleter, GET only the products which contains this name
   * otherwise: GET all the products
   */
  listProducts(): Observable<GetResponse> {
    return this.route.paramMap.pipe(
      switchMap(params => {
        if (params.has('id')) {
          console.log('id');
          this.pageIndex = 0;
          this.currentID = +params.get('id');
          return this.productS.getProductListByCat(this.currentID, this.pageSize, this.pageIndex);
        }
        if (params.has('name')) {
          return this.productS.getProductListByName(params.get('name'), this.pageSize, this.pageIndex);
        } else {
          return this.productS.getAllproducts();
        }
      })
    );
  }

  /**
   * Get the pagination event, extract the pageindex (which page) and the page size (how many per page) from it, and with this info excute
   * the getproducts(new pagesize, new pageindex) according to the user's new pagination needs
   */
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


