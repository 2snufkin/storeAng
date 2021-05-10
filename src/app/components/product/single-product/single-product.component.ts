import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  @Input() productName: string;
  @Input() description: string;
  @Input() image: string;
  @Input() price: number;
  @Input() id: number;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onDetail(name: string, id: number): void {
     this.router.navigate(['products', name, id]);
  }
}
