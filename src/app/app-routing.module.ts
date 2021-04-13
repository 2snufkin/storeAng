import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {ForOhforComponent} from './skeleton/for-ohfor/for-ohfor.component';

const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', component: ForOhforComponent   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
