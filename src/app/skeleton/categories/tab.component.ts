import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../models/category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  categories: Category[];

  constructor(private categorySrv: CategoryService, private router: Router) {
  }

  ngOnInit(): void {
    this.fillCategories();
  }

  /**
   * calling the getCategories method (Category Service) and subscribing to it
   * filling the categories Array in this component with the categories from the API
   */
  fillCategories(): void {
    this.categorySrv.getCategories().subscribe(data => {
      this.categories = data;
    });

  }


  movetoCat(id: number): void {
    this.router.navigate(['category', id]);


  }
}



