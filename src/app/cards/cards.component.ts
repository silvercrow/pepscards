import {Component} from 'angular2/core';
import {DataService} from '../app.dataservice';
// import * as utils from '../arena/card-picker';

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
      <div class="row" *ngFor="#cardRow of cardsByRow">
          <div class="col-sm-3" *ngFor="#card of cardRow">
              <div class="panel panel-default">
                  <div class="panel-body">
                      <img src="{{card.image}}" class="img-responsive" alt="">
                  </div>
              </div>
          </div>
      </div>
  </div>
  `
})

export class Cards {
  cards = [];
  cardsByRow = [];
  dataService;

  constructor(data: DataService) {
    this.dataService = data;
  }

  ngOnInit() {
    console.log('hello `Cards` component');
    this.dataService.retrieveData()
    .subscribe(data => {
      let i, row = [];
      this.cards = data;
      data.forEach((item) => {
        if (row.length < 4) row.push(item);
        else {
          this.cardsByRow.push(row);
          row = [];
        }
      });
      //let players = utils.getCardsForPlayers(this.cards);
      //console.log('players:\n', players);
    });
  }

  asyncDataWithWebpack() {
  }
}
