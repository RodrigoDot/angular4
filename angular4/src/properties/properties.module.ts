import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppHttpService } from '../app/app-http.service';

import { PropertiesComponent } from './properties.component';
import { PropertiesViewComponent } from './properties-view.component';
import { PropertiesEditComponent } from './properties-edit.component';
import { PropertiesAddComponent } from './properties-add.component';
import { PropertiesDeleteComponent } from './properties-delete.component';

const appRoutes: Routes = [
  {
    path: 'properties',
    component: PropertiesComponent
  },
  {
    path: 'properties/add',
    component: PropertiesAddComponent
  },
  {
    path: 'properties/:id',
    component: PropertiesViewComponent
  },
  {
    path: 'properties/:id/edit',
    component: PropertiesEditComponent
  },
  {
    path: 'properties/:id/delete',
    component: PropertiesDeleteComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  declarations: [
    PropertiesComponent,
    PropertiesViewComponent,
    PropertiesEditComponent,
    PropertiesAddComponent,
    PropertiesDeleteComponent
  ],
  providers: [
    AppHttpService
  ]
})

export class PropertiesModule {

}
