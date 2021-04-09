import {Injectable} from '@angular/core';
import {Category} from '../modules/category';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product} from '../modules/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[];
  categoryUrl: 'http://localhost:8082/api/categories';

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<GetResponse>(this.categoryUrl).pipe(
      map(response => response._embedded.categories)
    );
  }
}


interface GetResponse {
  _embedded: {
    categories: Category[];
  };
}


