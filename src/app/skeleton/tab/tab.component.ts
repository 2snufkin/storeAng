import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../modules/category';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  categories: Category[];
   navLinks = [
     {
    path: 'products',
    label: 'Our Products'
  },
     {
       path: 'category/1',
       label: 'Electricity'
     }
  ];
  constructor(private categorySrv: CategoryService) {
  }

  ngOnInit(): void {
    this.fillCategories();
  }

  fillCategories(): void {
    this.categorySrv.getCategories().subscribe(data => this.categories = data);

  }


}
