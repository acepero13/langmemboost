import { SequentialIterator } from './iterators/sequential';
import { Iterator } from './iterator';
import {Retriever} from './retriever';
import {Card} from '../card'
import {CardProvider} from '../providers/cardprovider'
import { CardPromiser } from "./promisers/cardpromiser";

export class Sequential implements Retriever {
    private cardProvider: CardProvider;
    public sequentialIt: Iterator; 

    public constructor(cardProvider: CardProvider){
       this.cardProvider = cardProvider;
    }

    public getNextCard(): Promise<Card> {
        var self = this;
        return new Promise<Card>((resolve, reject) => {
            let cardPromiser = new CardPromiser(self, self.cardProvider, resolve, reject, getNextCardromIt);
            cardPromiser.promiseCard();
        }); 
    }

    public getPreviousCard(): Promise<Card>{
        var self = this;
        return new Promise<Card>((resolve, reject) => {
            let cardPromiser = new CardPromiser(self, self.cardProvider, resolve, reject, getPreviousCardFromIt);
            cardPromiser.promiseCard();
        }); 
    }
}

function getNextCardromIt(it: Iterator){
    return it.next();
};

function getPreviousCardFromIt(it: Iterator){
    return it.previous();
};