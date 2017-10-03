import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { PropertiesModule } from '../properties/properties.module';

const appRoutes: Routes = [
  {path: '', redirectTo: '/properties', pathMatch: 'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    PropertiesModule,
    HttpModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
