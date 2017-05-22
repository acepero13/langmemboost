import {Retriever} from '../../src/retrievers/retriever';
import {Card} from '../../src/card';
export class ErrorRetriever implements Retriever{


    public getNextCard(): Promise<Card> {
       return new Promise<Card>((resolve, reject) => {
              reject(new Error("Deck has no more cards"));  
        });
    }

    public getPreviousCard(): Promise<Card> {
        return new Promise<Card>((resolve, reject) => {
              reject(new Error("Deck has no previous cards"));  
        });
    }
}