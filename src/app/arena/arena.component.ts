import {Component} from 'angular2/core';
import {AppState} from '../app.service';
import {Router, RouteParams} from 'angular2/router';

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
  private _routeUsername: string;
  private _stateUsername: string;
  constructor(public appState: AppState, private _router:Router,
  private _routeParams:RouteParams) {
    this._routeUsername = _routeParams.get('userName');
    this._stateUsername = this.appState.get('userName');
  }

  ngOnInit() {
    console.log('hello `Arena` component');
    console.log('user arrived from state:', this._stateUsername);
    console.log('user arrived from route Params:', this._routeUsername);
  }
  asyncDataWithWebpack() {
  }

}
