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
import {Arena} from './arena.component';

describe('Arena', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    Arena
  ]);

  it('should log ngOnInit', inject([ Arena ], (arena) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    arena.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
