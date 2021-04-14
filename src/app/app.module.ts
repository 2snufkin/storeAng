import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './services/product.service';
import {LayoutModule} from '@angular/cdk/layout';
import {TabComponent} from './skeleton/categories/tab.component';
import {ToolbarComponent} from './skeleton/toolbar/toolbar.component';
import {FooterComponent} from './skeleton/footer/footer.component';
import {MatirialModule} from './matirial/matirial.module';
import { SingleProductComponent } from './components/product/single-product/single-product.component';
import { ForOhforComponent } from './skeleton/for-ohfor/for-ohfor.component';
import {CategoryService} from './services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TabComponent,
    ToolbarComponent,
    FooterComponent,
    SingleProductComponent,
    ForOhforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatirialModule,
    HttpClientModule,
    LayoutModule,

  ],
  providers: [ProductService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
