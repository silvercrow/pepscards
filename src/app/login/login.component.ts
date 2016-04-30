import {Component} from 'angular2/core';
import {AppState} from '../app.service';

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
                  <form class="form-horizontal" (ngSubmit)="submitState(localState.value)" autocomplete="off">
                      <fieldset>
                          <legend>Crea un perfil de jugador</legend>
                          <div class="form-group">
                              <label for="userName" class="col-md-2 control-label">Usuario</label>
                              <div class="col-md-10">
                                  <md-input
                                    placeholder="Ingresa tu usuario"
                                    [value]="localState.value"
                                    (input)="localState.value = $event.target.value"
                                    autofocus>
                                  </md-input>
                              </div>
                          </div>
                          <button class="btn btn-primary">Guarda y Juega</button>
                      </fieldset>
                  </form>
                  <pre>this.localState = {{ localState | json }}</pre>
              </div>
          </div>
      </div>
  </div>
  `
})
export class Login {
  // Set our default values
  localState = { value: '' };

  constructor(public appState: AppState) {

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

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);

  }

}
