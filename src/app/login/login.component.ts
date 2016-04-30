import {Component} from 'angular2/core';
import {AppState} from '../app.service';
import {Router} from 'angular2/router';
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
                  <form class="form-horizontal" (ngSubmit)="submitUser(localState.userName)" autocomplete="off">
                      <fieldset>
                          <legend>Crea un perfil de jugador</legend>
                          <div class="form-group">
                              <label for="userName" class="col-md-2 control-label">Usuario</label>
                              <div class="col-md-10">
                                  <md-input
                                    placeholder="Ingresa tu usuario"
                                    [value]="localState.userName"
                                    (input)="localState.userName = $event.target.value"
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
  localState = { userName: '' };
  router: Router;
  constructor(public appState: AppState,_router: Router) {
    this.router = _router;
  }
  ngOnInit() {
    console.log('hello `Login` component');
  }
  asyncDataWithWebpack() {
  }
  submitUser(value) {
    console.log('submit userName', value);
    this.appState.set('userName', value);
    this.router.navigate( ['Arena', { userName: value}] );
  }
}
