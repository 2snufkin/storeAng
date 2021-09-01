import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseurl = 'http://localhost:8080/api/products';
  product: Product;


  constructor(private http: HttpClient) {

  }


  /**
   * Return one Product object according a giving ID
   * @param: id - the Id of the product
   */
  getProductById(id: number): Observable<Product> {
    const searchByIdURL = `${this.baseurl}/search/findProductById?id=${id}`;
    return this.getProductList(searchByIdURL).pipe(
      map(res => res._embedded.products[0])
    );
  }

  /**
   * Get all the products from a certain Category
   * @param: currentCategory
   * @param: nOofItems
   * @param: pageNumber
   */
  getProductListByCat(currentCategory: number, nOofItems: number, pageNumber: number): Observable<GetResponse> {
    const categoryUrl = `${this.baseurl}/search/findProductByCategory_Id?id=${currentCategory}&page=${pageNumber}&size=${nOofItems}`;
    return this.getProductList(categoryUrl);
  }

  /**
   * Search product by its name
   * @param: name
   * @param: nOofItems
   * @param: pageNumber
   */
  getProductListByName(name: string, nOofItems: number, pageNumber: number): Observable<GetResponse> {
    name = name.trim();
    const searchURL = `${this.baseurl}/search/findProductsByNameContaining?name=${name}&page=${pageNumber}&size=${nOofItems}`;
    return this.getProductList(searchURL);
  }

  // get all the products
  getAllproducts(): Observable<GetResponse> {
    const getAllURL = this.baseurl;
    return this.getProductList(getAllURL);
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




