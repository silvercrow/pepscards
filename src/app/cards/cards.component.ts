import {Component} from 'angular2/core';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Cards` component loaded asynchronously');

@Component({
  selector: 'Cards',
  styles: [`
    h1 {
      font-family: Arial, Helvetica, sans-serif
    }
  `],
  template: `
  <div class="container">
      <div class="row">
          <div class="col-sm-3">
              <div class="panel panel-default">
                  <div class="panel-body">
                      <img src="assets/cards/97_Boom_Boom.jpg" class="img-responsive" alt="">
                  </div>
              </div>
          </div>

          <div class="col-sm-3">
              <div class="panel panel-default">
                  <div class="panel-body">
                      <img src="assets/cards/87_Venom.jpg" class="img-responsive" alt="">
                  </div>
              </div>
          </div>

          <div class="col-sm-3">
              <div class="panel panel-default">
                  <div class="panel-body">
                      <img src="assets/cards/75_Magneto_Regresa.jpg" class="img-responsive" alt="">
                  </div>
              </div>
          </div>

          <div class="col-sm-3">
              <div class="panel panel-default">
                  <div class="panel-body">
                      <img src="assets/cards/42_Jubilo.jpg" class="img-responsive" alt="">
                  </div>
              </div>
          </div>

      </div>

  </div>
  `
})
export class Cards {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Cards` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    // this.asyncDataWithWebpack();
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
    // setTimeout(() => {
    //
    //   let asyncDataPromise = asyncMockDataPromiseFactory();
    //   asyncDataPromise.then(json => {
    //     console.log('async mockData', json);
    //   });
    //
    // });
  }

}
