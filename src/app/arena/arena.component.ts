import {Component} from 'angular2/core';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Arena` component loaded asynchronously');

@Component({
  selector: 'arena',
  styles: [`
    h1 {
      font-family: Arial, Helvetica, sans-serif
    }
  `],
  template: `
  <div class="container text-center">
    <h2>Game Arena</h2>
    <div class="row">
      <div class="col-sm-3 col-sm-offset-2 col-xs-5">
        <div class="panel panel-success">
          <div class="panel-heading">
     <h3 class="panel-title">User name</h3>
   </div>
            <div class="panel-body">
                <img src="assets/cards/42_Jubilo.jpg" class="img-responsive" alt="">
            </div>
        </div>
      </div>
      <div class="col-sm-2 col-xs-2">
        <h2>VS</h2>
      </div>
      <div class="col-sm-3 col-xs-5">
        <div class="panel panel-danger">
          <div class="panel-heading">
     <h3 class="panel-title">Mr. Roboto</h3>
   </div>
            <div class="panel-body">
                <img src="assets/cards/42_Jubilo.jpg" class="img-responsive" alt="">
            </div>
        </div>
      </div>
    </div>
  </div>
  `
})
export class Arena {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Arena` component');
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
