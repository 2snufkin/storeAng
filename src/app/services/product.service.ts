import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../modules/product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseurl = 'http://localhost:8082/api/products';

  constructor(private http: HttpClient) {

  }

  // give this function an id as a parameter and it will give you all the products from this id
  getProductListByCat(currentCategory: number): Observable<Product[]> {
    const categoryUrl = `${this.baseurl}/search/findProductByCategory_Id?id=${currentCategory}`;
    return this.http.get<GetResponse>(categoryUrl).pipe(
      map(response => response._embedded.products)
    );

  }


  getProductList(): Observable<Product[]> {
     return this.http.get<GetResponse>(this.baseurl).pipe(
      map(response => response._embedded.products)
    );
  }

}

interface GetResponse {
  _embedded: {
    products: Product[];
  };
}










