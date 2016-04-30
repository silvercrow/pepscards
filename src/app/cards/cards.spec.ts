import {
  it,
  inject,
  injectAsync,
  describe,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';

// Load the implementations that should be tested
import {Cards} from './cards.component';

describe('Cards', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    Cards
  ]);

  it('should log ngOnInit', inject([ Cards ], (cards) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    cards.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
