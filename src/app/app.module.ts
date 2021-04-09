import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./services/product.service";
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {TabComponent} from './skeleton/tab/tab.component';
import { ToolbarComponent } from './skeleton/toolbar/toolbar.component';
import { ToolbarBotComponent } from './skeleton/toolbar-bot/toolbar-bot.component';
import { SidebarComponent } from './skeleton/sidebar/sidebar.component';
import { FooterComponent } from './skeleton/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TabComponent,
    ToolbarComponent,
    ToolbarBotComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
