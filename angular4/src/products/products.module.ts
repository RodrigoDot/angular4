import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';

const appRoutes: Routes = [
  {path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    ProductsComponent
  ]
})

export class ProductsModule {

}
