/// <reference path="../typings/globals/mocha/index.d.ts" />
import { expect } from 'chai';
import {Sequential} from '../src/retrievers/sequential';
import {FakeCardProvider} from './fakes/cardprovider';

describe('Test Squential retriever', function(){
    it('should return error on empty array', function(){
         let cardProvider = new FakeCardProvider([]);
         let sequential = new Sequential(cardProvider);
         return sequential.getNextCard()
            .then((card) =>{console.log("b")})
            .catch((error) =>{console.log(error);expect(error).to.be.instanceof(Error)
                .and.have.property('message', 'Deck has no more cards')});
    });



    it('should return first card with two items array', function(){
         let cardProvider = createFakeProvider();
         let sequential = new Sequential(cardProvider);
         return sequential.getNextCard()
            .then(card => { expect(card).to.have.property("front","Front First")})
            .catch(error => {console.log(error);expect(true).to.be.false});
    });

    it('should return second card with two items array', function(){
         let cardProvider = createFakeProvider();
         let sequential = new Sequential(cardProvider);
         return sequential.getNextCard()
            .then(card => {
                return sequential.getNextCard()
                .then(card2 => { 
                    expect(card2).to.have.property("front","Front Second")}
                )})
    });
});


function createFakeProvider(): FakeCardProvider{
    let firstCard = {front: "Front First", back: "Back First"};
    let secondCard = {front: "Front Second", back: "Back Second"};
    let cardProvider = new FakeCardProvider([firstCard, secondCard]);
    return cardProvider;
}