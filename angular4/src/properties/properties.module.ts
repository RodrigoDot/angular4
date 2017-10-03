import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppHttpService } from '../app/app-http.service';

import { PropertiesComponent } from './properties.component';

const appRoutes: Routes = [{
  path: 'properties',
  component: PropertiesComponent
}];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    PropertiesComponent
  ],
  providers: [
    AppHttpService
  ]
})

export class PropertiesModule {

}
