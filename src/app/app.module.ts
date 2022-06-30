import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './_commons/nav-bar/nav-bar.component';
import { FooterComponent } from './_commons/footer/footer.component';
import { NotFoundComponent } from './_pages/not-found/not-found.component';
import { HomePageComponent } from './_pages/home-page/home-page.component';
import { ProductsPageComponent } from './_pages/products-page/products-page.component';
import { ProductListComponent } from './_pages/products-page/product-list/product-list.component';
import { ProductCardComponent } from './_pages/products-page/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    HomePageComponent,
    ProductsPageComponent,
    ProductListComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
