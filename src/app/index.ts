// App
export * from './app.component';
export * from './app.service';
export * from './app.dataservice';


import {AppState} from './app.service';
import {DataService} from './app.dataservice';

// Application wide providers
export const APP_PROVIDERS = [
  AppState,DataService
];
