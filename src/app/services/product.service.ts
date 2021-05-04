import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../modules/product';
import {map} from 'rxjs/operators';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseurl = 'http://localhost:8082/api/products';
  private asinTable = ['B00F4H2O6W', 'B08K265NX3'];
  category = 2;
  product: Product;

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
      map(response => {
          console.log(response);
          return response._embedded.products;
        }
      )
    );

  }

  createProductfromApi(): void {
    let api: string;
    let proName: string;
    let asinString: string;
    let product;
    let date;
    let imageurl: string;
    let description;
    let price;
    fetch("https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz/amazon-search-by-keyword-asin?page=1&asin=B00F4H2O6WCode=com&sortBy=relevanceblender", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "31612805dcmsh1d6ef0ed9f73d70p1f53ebjsn63adde2a0f6c",
        "x-rapidapi-host": "axesso-axesso-amazon-data-service-v1.p.rapidapi.com"
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
//     fetch('https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz/amazon-search-by-keyword-asin?page=1&keyword=B00F4H2O6WCode=com&sortBy=relevanceblender', {
//       'method': 'GET',
//       'headers': {
//         'x-rapidapi-key': '31612805dcmsh1d6ef0ed9f73d70p1f53ebjsn63adde2a0f6c',
//         'x-rapidapi-host': 'axesso-axesso-amazon-data-service-v1.p.rapidapi.com').then((response => response.json())).then(json => {
//       const jsonFile = json;
//       product = jsonFile.product;
//       proName = product.title;
//        imageurl = product.main_image.link;
//       description = product.feature_bullets[0];
//       price = product.buybox_winner.price.value;
//       console.log(price);
//       const productToadd = new Product(proName, asinString, imageurl, description, price, this.category);
//       const myJson = JSON.stringify(productToadd);
//
//     });
//
//   }
//
// );
// }

  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  };
}










