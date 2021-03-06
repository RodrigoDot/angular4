import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppHttpService } from '../app/app-http.service';

@Component({
  templateUrl: '/properties-edit.component.html'
})

export class PropertiesEditComponent {

  public propertie: any = {};
  public propertieId: any = {};

  constructor(
    private httpService: AppHttpService,
    private route: ActivatedRoute,
    private router: Router
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
      this.propertieId = id;
      this.propertie = res.data.attributes;
    })
  }

  save() {
    let data = {
      title: this.propertie.title,
      description: this.propertie.description,
      value: this.propertie.value
    };

    this.httpService.builder('properties')
      .update(this.propertieId, data)
      .then(() => {
        this.router.navigate(['/properties/' + this.propertieId]);
      })

  }

}
