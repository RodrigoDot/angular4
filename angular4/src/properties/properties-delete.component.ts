import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppHttpService } from '../app/app-http.service';

@Component({
  template: ''
})

export class PropertiesDeleteComponent {

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
        this.delete(params.id);
      });
  }

  delete(id: number) {

    this.httpService.builder('properties')
      .delete(this.propertieId)
      .then(() => {
        this.router.navigate(['/']);
      })

  }

}
