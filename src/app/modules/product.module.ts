import {NgModule} from '@angular/core';
import {ProductDetailComponent} from '../components/product/product-detail/product-detail.component';
import {SingleProductComponent} from '../components/product/single-product/single-product.component';
import {ProductListComponent} from '../components/product/product-list/product-list.component';
import {SharedModule} from './shared.module';


const product = [
  ProductDetailComponent,
  SingleProductComponent,
  ProductListComponent,

];

@NgModule({
  declarations: [product],
  imports: [SharedModule],
  exports: [product ]
})


export class ProductModule {

}
