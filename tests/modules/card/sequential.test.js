"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cardretriever_1 = require("../../../src/modules/card/retrievers/cardretriever");
const chai_1 = require("chai");
const cardprovider_1 = require("./fakes/cardprovider");
const sequential_1 = require("../../../src/modules/card/retrievers/iterators/sequential");
function makeSequentialCardRetriever(cardProvider) {
    let sequentialIterator = new sequential_1.SequentialIterator([]);
    let sequential = new cardretriever_1.CardRetriever(cardProvider, sequentialIterator);
    return sequential;
}
describe('Test Squential retriever getNextCard', function () {
    it('should return error on empty array', function () {
        let cardProvider = new cardprovider_1.FakeCardProvider([]);
        let sequential = makeSequentialCardRetriever(cardProvider);
        return sequential.getNextCard()
            .then((card) => {
            console.log("b");
        })
            .catch((error) => {
            chai_1.expect(error).to.be.instanceof(Error)
                .and.have.property('message', 'Deck has no more cards');
        });
    });
    it('should return first card with two items array', function () {
        let cardProvider = createFakeProvider();
        let sequential = makeSequentialCardRetriever(cardProvider);
        return sequential.getNextCard()
            .then(card => {
            chai_1.expect(card).to.have.property("front", "Front First");
        })
            .catch(error => {
            chai_1.expect(true).to.be.false;
        });
    });
    it('should return second card with two items array', function () {
        let cardProvider = createFakeProvider();
        let sequential = makeSequentialCardRetriever(cardProvider);
        return sequential.getNextCard()
            .then(card => {
            return sequential.getNextCard()
                .then(card2 => {
                chai_1.expect(card2).to.have.property("front", "Front Second");
            });
        });
    });
});
describe('Test sequential retriever getPreviousCard', function () {
    it('should return error on empty array', function () {
        let cardProvider = new cardprovider_1.FakeCardProvider([]);
        let sequential = makeSequentialCardRetriever(cardProvider);
        return sequential.getPreviousCard()
            .then((card) => {
            console.log("b");
        })
            .catch((error) => {
            chai_1.expect(error).to.be.instanceof(Error)
                .and.have.property('message', 'Deck has no more cards');
        });
    });
    it('should return first card with two items array after moving to second', function () {
        let cardProvider = createFakeProvider();
        let sequential = makeSequentialCardRetriever(cardProvider);
        return sequential.getNextCard()
            .then(card => {
            return sequential.getNextCard()
                .then(card2 => {
                return sequential.getPreviousCard().then((card1) => {
                    chai_1.expect(card1).to.have.property("front", "Front First");
                });
            });
        });
    });
});
function createFakeProvider() {
    let firstCard = { front: "Front First", back: "Back First" };
    let secondCard = { front: "Front Second", back: "Back Second" };
    let cardProvider = new cardprovider_1.FakeCardProvider([firstCard, secondCard]);
    return cardProvider;
}
//# sourceMappingURL=sequential.test.js.map