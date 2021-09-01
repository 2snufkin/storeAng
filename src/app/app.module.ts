import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LayoutModule} from '@angular/cdk/layout';
import {TabComponent} from './skeleton/categories/tab.component';
import {ToolbarComponent} from './skeleton/toolbar/toolbar.component';
import {FooterComponent} from './skeleton/footer/footer.component';
import {MatirialModule} from './modules/matirial.module';
import {ForOhforComponent} from './skeleton/for-ohfor/for-ohfor.component';
import {SearchComponent} from './components/search/search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {OKTA_CONFIG, OktaAuthModule} from '@okta/okta-angular';
import {Router} from '@angular/router';
import myAppConfig from './config/configOkta';
import {OrdersHistoryComponent} from './components/orders-history/orders-history.component';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {CarteModule} from './modules/carte.module';
import {ProductModule} from './modules/product.module';
import {AuthModule} from './modules/auth.module';


const oktaConfig = Object.assign({
  onAuthRequired: (oktaAuth, injector) => {
    const router = injector.get(Router);
    // Redirect the user to your custom login page
    router.navigate(['/login']);
  }
}, myAppConfig.oidc);


@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    ToolbarComponent,
    FooterComponent,
    ForOhforComponent,
    SearchComponent,
    OrdersHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    ReactiveFormsModule,
    OktaAuthModule,
    // My modules
    CarteModule,
    MatirialModule,
    ProductModule,
    AuthModule


  ],
  providers: [ {provide: OKTA_CONFIG, useValue: oktaConfig},
               {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
