import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppHttpService } from '../app/app-http.service';

@Component({
  templateUrl: '/properties-add.component.html'
})

export class PropertiesAddComponent {

  public propertie: any = {};
  public propertieId: any = {};

  constructor(
    private httpService: AppHttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  save() {
    
    let data = {
      title: this.propertie.title,
      description: this.propertie.description,
      value: this.propertie.value
    };

    this.httpService.builder('properties')
      .create(data)
      .then(() => {
        this.router.navigate(['/properties/' + this.propertieId]);
      })

  }

}
