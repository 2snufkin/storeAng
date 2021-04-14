import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../modules/category';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  categories: Category[];


  constructor(private categorySrv: CategoryService) {
  }

  ngOnInit(): void {
    this.fillCategories();
  }

  fillCategories(): void {
    this.categorySrv.getCategories().subscribe(data => this.categories = data);

   }


}



