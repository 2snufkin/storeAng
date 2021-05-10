import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../modules/product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseurl = 'http://localhost:8080/api/products';
  product: Product;


  constructor(private http: HttpClient) {

  }

  getProductById(id: number): Observable<Product[]> {
    const searchByIdURL = `${this.baseurl}/search/findProductById?id=${id}`;
    return this.getProductList(searchByIdURL);
  }


  // give this function an id as a parameter and it will give you all the products from this id
  getProductListByCat(currentCategory: number): Observable<Product[]> {
    const categoryUrl = `${this.baseurl}/search/findProductByCategory_Id?id=${currentCategory}`;
    return this.getProductList(categoryUrl);
  }

  getProductListByName(name: string): Observable<Product[]> {
    const searchURL = `${this.baseurl}/search/findProductsByNameContaining?name=${name}`;
    return this.getProductList(searchURL);
  }

  // get all the products
  getAllproducts(): Observable<Product[]> {
    const getAllURL = this.baseurl;
    return this.getProductList(getAllURL);

  }

  getProductList(url: string): Observable<Product[]> {
    return this.http.get<GetResponse>(url).pipe(
      map(response => {
          return response._embedded.products;
        }
      )
    );

  }


}

interface GetResponse {
  _embedded: {
    products: Product[];
  };
}










