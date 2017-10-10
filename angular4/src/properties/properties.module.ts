import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppHttpService } from '../app/app-http.service';

import { PropertiesComponent } from './properties.component';
import { PropertiesViewComponent } from './properties-view.component';

const appRoutes: Routes = [
  {
    path: 'properties',
    component: PropertiesComponent
  },
  {
    path: 'properties/:id',
    component: PropertiesViewComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    PropertiesComponent,
    PropertiesViewComponent
  ],
  providers: [
    AppHttpService
  ]
})

export class PropertiesModule {

}
