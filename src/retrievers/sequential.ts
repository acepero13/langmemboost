import { SequentialIterator } from './iterators/sequential';
import { Iterator } from './iterator';
import {Retriever} from './retriever';
import {Card} from '../card'
import {CardProvider} from '../providers/cardprovider'
import { CardPromiser } from "./promisers/cardpromiser";
export class Sequential implements Retriever {
    private cardProvider: CardProvider;
    private sequentialIt: Iterator; 
    private cardPromiser: CardPromiser;

    public constructor(cardProvider: CardProvider){
       this.cardProvider = cardProvider;
    }

    public getIterator():Iterator{
        return this.sequentialIt;
    }

    public getNextCard(): Promise<Card> {
        var self = this;
        return new Promise<Card>((resolve, reject) => {
            self.cardPromiser = new CardPromiser(self, self.cardProvider, resolve, reject);
            self.cardPromiser.promiseCard();
             
        }); 
    }

    public getPreviousCard(): Promise<Card>{
        throw new Error('Not implemented yet.');
    }
}