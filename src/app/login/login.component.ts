import {Component} from 'angular2/core';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Login` component loaded asynchronously');

@Component({
  selector: 'login',
  styles: [`
    h1 {
      font-family: Arial, Helvetica, sans-serif
    }
  `],
  template: `
  <div class="container">
      <div class="row">
          <div class="col-md-8 col-md-offset-2">
              <div class="well">
                  <form class="form-horizontal">
                      <fieldset>
                          <legend>Create game profile</legend>
                          <div class="form-group">
                              <label for="userName" class="col-md-2 control-label">User Name</label>

                              <div class="col-md-10">
                                  <input type="text" class="form-control" id="userName" placeholder="Enter user name">
                              </div>
                          </div>
                          <button class="btn btn-primary">Save & play</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
  </div>
  `
})
export class Login {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Login` component');
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
