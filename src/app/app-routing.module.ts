import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {ForOhforComponent} from './skeleton/for-ohfor/for-ohfor.component';
import {CarteDetailsComponent} from './components/carte/carte-details/carte-details.component';

import {OktaAuthGuard, OktaCallbackComponent} from '@okta/okta-angular';
import {LoginComponent} from './components/login/login.component';
import {ProductDetailComponent} from './components/product/product-detail/product-detail.component';
import {CheckoutComponent} from './components/carte/checkout/checkout.component';
import {OrdersHistoryComponent} from './components/orders-history/orders-history.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/search/:name', component: ProductListComponent},
  {path: 'products/:name/:id', component: ProductDetailComponent},
  {path: 'login/callback', component: OktaCallbackComponent},
  {path: 'checkout', component: CheckoutComponent, canActivate: [OktaAuthGuard]},
  {path: 'orders', component: OrdersHistoryComponent, canActivate: [OktaAuthGuard]},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'cart', component: CarteDetailsComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', component: ForOhforComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
