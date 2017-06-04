/// <reference path="../../../typings/globals/mocha/index.d.ts" />
import {expect} from 'chai';

import {ErrorRetriever} from './fakes/errorretriever';
import {FakeCardProvider} from './fakes/cardprovider';
import {Deck} from "../../../src/modules/card/deck";
import {CardRetriever} from "../../../src/modules/card/retrievers/cardretriever";
import {SequentialIterator} from "../../../src/modules/card/retrievers/iterators/sequential";


//TODO: Make random
describe('On Empty Deck getNextCard', function () {
    it('should return empty array', function () {
        let sequentialRetriever = new ErrorRetriever();
        let currentDeck = new Deck(sequentialRetriever);
        return currentDeck.getNextCard()
            .then(card => {
                expect(true).to.be.false
            })
            .catch((error) => {
                expect(error).to.be.instanceof(Error)
                    .and.have.property('message', 'Deck has no more cards')
            });
    });
});

describe('Sequential card retriever Next Card', function () {
    it('should return first card on getNextCard', function () {
        let firstCard = {front: "Front First", back: "Back First"};
        let secondCard = {front: "Front Second", back: "Back Second"};
        let cardProvider = new FakeCardProvider([firstCard, secondCard]);
        let sequentialRetriever = makeSequentialRetriever(cardProvider);
        let currentDeck = new Deck(sequentialRetriever);
        return currentDeck.getNextCard().then(
            card => {
                expect(card).to.be.equals(firstCard)
            }
        );
    });
});


function makeSequentialRetriever(cardProvider: FakeCardProvider) {
    let sequentialIterator = new SequentialIterator([]);
    let sequentialRetriever = new CardRetriever(cardProvider, sequentialIterator);
    return sequentialRetriever;
}
describe('Sequential card retriever', function () {
    it('should return first card on getPrevious', function () {
        let firstCard = {front: "Front First", back: "Back First"};
        let secondCard = {front: "Front Second", back: "Back Second"};
        let cardProvider = new FakeCardProvider([firstCard, secondCard]);
        let sequentialRetriever = makeSequentialRetriever(cardProvider);
        let currentDeck = new Deck(sequentialRetriever);
        return currentDeck.getNextCard().then((card1) =>
            currentDeck.getNextCard().then(card2 => {
                currentDeck.getPreviousCard().then(cardBack => {
                    cardBack => expect(cardBack).to.be.equals(firstCard)
                })
            })
        );
    });
});
