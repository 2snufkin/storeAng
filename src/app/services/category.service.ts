import {Injectable} from '@angular/core';
import {Category} from '../modules/category';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryUrl = 'http://localhost:8080/api/categories';

  constructor(private http: HttpClient) {
  }


  getCategories(): Observable<Category[]> {
    return this.http.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.categories)
    );
  }

}


interface GetResponseProductCategory {
  _embedded: {
    categories: Category[];
  };
}


