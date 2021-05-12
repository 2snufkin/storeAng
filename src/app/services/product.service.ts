import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../modules/product';
import {map} from 'rxjs/operators';
import {Page} from '../modules/Page';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseurl = 'http://localhost:8080/api/products';
  product: Product;


  constructor(private http: HttpClient) {

  }


  /**
   * Return one Product object
   * @param id: the Id of the product
   */
  getProductById(id: number): Observable<Product> {
    const searchByIdURL = `${this.baseurl}/search/findProductById?id=${id}`;
    return this.getProductList(searchByIdURL).pipe(
      map(res => res._embedded.products[0])
    );
  }


  // give this function an id as a parameter and it will give you all the products from this id
  getProductListByCat(currentCategory: number, nOofItems: number, pageNumber: number): Observable<GetResponse> {
    const categoryUrl = `${this.baseurl}/search/findProductByCategory_Id?id=${currentCategory}&page=${pageNumber}&size=${nOofItems}`;
    return this.getProductList(categoryUrl);
  }

  getProductListByName(name: string): Observable<GetResponse> {
    const searchURL = `${this.baseurl}/search/findProductsByNameContaining?name=${name}`;
    return this.getProductList(searchURL);
  }

  // get all the products
  getAllproducts(): Observable<GetResponse> {
    const getAllURL = this.baseurl;
    return this.getProductList(getAllURL);

  }

   // DELETE
  getPageParamatersforAll(): Observable<Page> {
    return this.http.get<GetResponse>(this.baseurl).pipe(
      map(res => {
          return res.page;
        }
      )
    );
  }

         // Delete
  getPageParamatersforCategory(categoryId: number): Observable<Page> {
    const categoryUrl = `${this.baseurl}/search/findProductByCategory_Id?id=${categoryId}`;
    return this.http.get<GetResponse>(categoryUrl).pipe(
      map(res => {
          return res.page;
        }
      )
    );
  }

  /**
   * a utility method. I shouldn't call it outside the service
   * @param url will vary
   */
  getProductList(url: string): Observable<GetResponse> {
    return this.http.get<GetResponse>(url);

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




