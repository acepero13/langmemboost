import { Iterator } from './iterators/iterator';
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
        let self = this;
        return new Promise<Card>((resolve, reject) => {
            let cardPromiser = new CardPromiser(self, self.cardProvider, resolve, reject, getNextCardFromIt);
            cardPromiser.promiseCard();
        }); 
    }

    public getPreviousCard(): Promise<Card>{
        let self = this;
        return new Promise<Card>((resolve, reject) => {
            let cardPromiser = new CardPromiser(self, self.cardProvider, resolve, reject, getPreviousCardFromIt);
            cardPromiser.promiseCard();
        }); 
    }
}


function getNextCardFromIt(it: Iterator){
    return it.next();
}
function getPreviousCardFromIt(it: Iterator){
    return it.previous();
}