import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../modules/product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:8082/api/products';

  constructor(private http: HttpClient) {
  }


  getProductList(): Observable<Product[]> {
    return this.http.get<GetResponse>(this.url).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  };
}











