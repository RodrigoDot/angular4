import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';

@Component({
  templateUrl: './properties.component.html'
})

export class PropertiesComponent {

  public properties: any[];

  constructor(private httpService: AppHttpService) {}

  ngOnInit() {
    this.httpService.builder('properties')
      .list()
      .then((res) => {
        this.properties = res.data;
      })
  }
}
