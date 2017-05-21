/// <reference path="../typings/globals/mocha/index.d.ts" />
import { expect } from 'chai';
import card = require('../src/card');
describe('Card module', () => {
  it('should return a valid card', () => {
    let restult = new card.Card();
    expect(restult).to.be.an.instanceOf(card.Card);
  });
});