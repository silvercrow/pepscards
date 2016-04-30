import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {HmrState} from 'angular2-hmr';

@Injectable()
export class DataService {
  @HmrState() _state = {};
  http: Http;
  data: {};
  constructor(http: Http) {
    this.http = http;
    this.data = null;
    console.log('DataService constructor');
  }
  retrieveData() {
    this.http.get('http://localhost:3000/cards')
      .map(res => res.json())
      .subscribe(data => {
      this.data = data;
    });
  }
}
