/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Home} from './home';
import {AppState} from './app.service';
import {RouterActive} from './router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    `
    md-toolbar ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60px;
    }
    md-toolbar li {
      display: inline;
    }
    md-toolbar li.active {
      background-color: lightgray;
    }
  `],
  template: `
    <header>
    <div class="navbar navbar-inverse">
				<div class="container">

						<div class="navbar-header">
								<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
								</button>
								<a class="navbar-brand" href="javascript:void(0)">
										<img src="assets/img/angular.png" class="img-responsive logo" alt="" /> Angular 2
								</a>
						</div>
						<div class="navbar-collapse collapse navbar-responsive-collapse">
								<ul class="nav navbar-nav">
										<li class="active"><a [routerLink]=" ['Home'] ">Inicio</a></li>
										<li><a [routerLink]=" ['Cards'] ">Ver las PepsCards</a></li>
								</ul>

								<ul class="nav navbar-nav navbar-right">
										<li class="loging"><a [routerLink]=" ['Login'] ">Login</a></li>
										<li class="loggedIn"><a href="#">David</a></li>
								</ul>
						</div>
				</div>
		</div>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
    </footer>
  `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') },
  { path: '/login', name: 'Login', loader: () => require('es6-promise!./login')('Login') },
  { path: '/cards', name: 'Cards', loader: () => require('es6-promise!./cards')('Cards') },
  { path: '/arena', name: 'Arena', loader: () => require('es6-promise!./arena')('Arena') }
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState) {}

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
