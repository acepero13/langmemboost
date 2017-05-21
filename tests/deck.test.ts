/// <reference path="../typings/globals/mocha/index.d.ts" />
import { expect } from 'chai';
import deck = require('../src/deck');
import seq = require('../src/retrievers/sequential');
import {ErrorRetriever} from './fakes/errorretriever';

describe('On Empty Deck getNextCard', function(){
    it('should return empty array', function(){
        let sequentialRetriever = new ErrorRetriever();
         let currentDeck = new deck.Deck(sequentialRetriever);
         currentDeck.getNextCard()
         .then(card => {expect(true).to.be.false})
         .catch((error) =>{expect(error).to.be.instanceof(Error)
             .and.have.property('message', 'Deck has no more cards')});
    });
});


describe('Sequential card retriever', function(){
    it('should return first card on getNextCard', function(){
        let sequentialRetriever = new seq.Sequential();
        let currentDeck = new deck.Deck(sequentialRetriever);
    });
});
