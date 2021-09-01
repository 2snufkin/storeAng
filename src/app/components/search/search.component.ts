import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private currentRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSearch(value: string): void {
    this.router.navigate(['/products', 'search', value])  ;

  }
}

