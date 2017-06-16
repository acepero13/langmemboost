"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const errorretriever_1 = require("./fakes/errorretriever");
const cardprovider_1 = require("./fakes/cardprovider");
const deck_1 = require("../../../src/modules/card/deck");
const cardretriever_1 = require("../../../src/modules/card/retrievers/cardretriever");
const sequential_1 = require("../../../src/modules/card/retrievers/iterators/sequential");
describe('On Empty Deck getNextCard', function () {
    it('should return empty array', function () {
        let sequentialRetriever = new errorretriever_1.ErrorRetriever();
        let currentDeck = new deck_1.Deck(sequentialRetriever);
        return currentDeck.getNextCard()
            .then(card => {
            chai_1.expect(true).to.be.false;
        })
            .catch((error) => {
            chai_1.expect(error).to.be.instanceof(Error)
                .and.have.property('message', 'Deck has no more cards');
        });
    });
});
describe('Sequential card retriever Next Card', function () {
    it('should return first card on getNextCard', function () {
        let firstCard = { front: "Front First", back: "Back First" };
        let secondCard = { front: "Front Second", back: "Back Second" };
        let cardProvider = new cardprovider_1.FakeCardProvider([firstCard, secondCard]);
        let sequentialRetriever = makeSequentialRetriever(cardProvider);
        let currentDeck = new deck_1.Deck(sequentialRetriever);
        return currentDeck.getNextCard().then(card => {
            chai_1.expect(card).to.be.equals(firstCard);
        });
    });
});
function makeSequentialRetriever(cardProvider) {
    let sequentialIterator = new sequential_1.SequentialIterator([]);
    let sequentialRetriever = new cardretriever_1.CardRetriever(cardProvider, sequentialIterator);
    return sequentialRetriever;
}
describe('Sequential card retriever', function () {
    it('should return first card on getPrevious', function () {
        let firstCard = { front: "Front First", back: "Back First" };
        let secondCard = { front: "Front Second", back: "Back Second" };
        let cardProvider = new cardprovider_1.FakeCardProvider([firstCard, secondCard]);
        let sequentialRetriever = makeSequentialRetriever(cardProvider);
        let currentDeck = new deck_1.Deck(sequentialRetriever);
        return currentDeck.getNextCard().then((card1) => {
            return currentDeck.getNextCard().then(card2 => {
                return currentDeck.getPreviousCard().then((cardBack) => {
                    chai_1.expect(cardBack).to.be.equals(firstCard);
                });
            });
        });
    });
});
