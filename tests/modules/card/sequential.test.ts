import { CardRetriever } from '../../../src/modules/card/retrievers/cardretriever';
import {expect} from 'chai';

import {FakeCardProvider} from './fakes/cardprovider';
import {SequentialIterator} from "../../../src/modules/card/retrievers/iterators/sequential";
import {CardProvider} from "../../../src/modules/card/providers/cardprovider";
import {FakeErrorCardProvider} from "./fakes/errorcardprovider";

function makeSequentialCardRetriever(cardProvider: CardProvider) {
    let sequentialIterator = new SequentialIterator([]);
    let sequential = new CardRetriever(cardProvider, sequentialIterator);
    return sequential;
}
describe('Test Squential retriever getNextCard', function () {
    it('should return error on empty array', function () {
        let cardProvider = new FakeCardProvider([]);
        let sequential = makeSequentialCardRetriever(cardProvider);
        return sequential.getNextCard()
            .then((card) => {
                console.log("b")
            })
            .catch((error) => {
                expect(error).to.be.instanceof(Error)
                    .and.have.property('message', 'Item has no next')
            });
    });

    it('should return first card with two items array', function () {
        let cardProvider = createFakeProvider();
        let sequential = makeSequentialCardRetriever(cardProvider);
        return sequential.getNextCard()
            .then(card => {
                expect(card).to.have.property("front", "Front First")
            })
            .catch(error => {
                expect(true).to.be.false
            });
    });


    it('should return second card with two items array', function () {
        let cardProvider = createFakeProvider();
        let sequential = makeSequentialCardRetriever(cardProvider);
        return sequential.getNextCard()
            .then(card => {
                return sequential.getNextCard()
                    .then(card2 => {
                            expect(card2).to.have.property("front", "Front Second")
                        }
                    )
            })
    });
});

describe('Test sequential retriever getPreviousCard', function () {
    it('should return error on empty array', function () {
        let cardProvider = new FakeCardProvider([]);
        let sequential = makeSequentialCardRetriever(cardProvider);
        return sequential.getPreviousCard()
            .then((card) => {
                console.log("b")
            })
            .catch((error) => {
                expect(error).to.be.instanceof(Error)
                    .and.have.property('message', 'Item has no previous')
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
                            expect(card1).to.have.property("front", "Front First")
                        })
                    });
            })
    });
});

describe('FakeErrorProvider', () => {
    it('should return error when using fake error provider', () => {
        let cardProvider = createFakeErrorProvider();
        let sequential = makeSequentialCardRetriever(cardProvider);
        return sequential.getNextCard().then((card) =>{
            expect(true).to.be.false;
        }).catch((err)=>{
            expect(err).to.be.equals("Error");
        })
    });
});




function createFakeProvider(): FakeCardProvider {
    let firstCard = {front: "Front First", back: "Back First"};
    let secondCard = {front: "Front Second", back: "Back Second"};
    let cardProvider = new FakeCardProvider([firstCard, secondCard]);
    return cardProvider;

}



function createFakeErrorProvider(): CardProvider{
    return new FakeErrorCardProvider();
}
