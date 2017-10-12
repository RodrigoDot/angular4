import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppHttpService } from '../app/app-http.service';

@Component({
  templateUrl: '/properties-edit.component.html'
})

export class PropertiesEditComponent {

  public propertie: any = {};
  public propertieType: any = {};
  public propertieDistrict: any = {};

  constructor(
    private httpService: AppHttpService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params
      .subscribe((params: any) => {
        this.view(params.id);
      });
  }

  view(id: number) {
    this.httpService.builder('properties')
    .view(id)
    .then((res) => {
      this.propertie = res.data.attributes;
      this.propertieType = res.included[0].attributes;
      this.propertieDistrict = res.included[1].attributes;
    })
  }

}
