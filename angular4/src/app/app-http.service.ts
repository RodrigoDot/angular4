import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class AppHttpService {

  private url: string;

  constructor(private http: Http) {}

  builder(resource: string) {
    this.url = 'http://localhost:8765/api/v1/' + resource;
    return this;
  }

  list() {
    let url = this.url;

    let myHeaders = new Headers({
      'Accept': 'application/vnd.api+json'
    });

    let options = new RequestOptions({
        headers: myHeaders
    });

    return this.http.get(url, options)
      .toPromise()
      .then((res) => {
        return res.json() || {};
      })
  }

}


37 min
