import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppHttpService } from '../app/app-http.service';

@Component({
  templateUrl: '/properties.component.html'
})

export class PropertiesViewComponent {

  public properties: any[];

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
      this.properties = res.data;
    })
  }

}
