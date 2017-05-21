import {Retriever} from '../../src/retrievers/retriever';
import {Card} from '../../src/card';
export class ErrorRetriever implements Retriever{

    public getNextCard() {
       return new Promise<Card>((resolve, reject) => {
              reject(new Error("Deck has no more cards"));  
        });
    }

    public getPreviousCard() {
        return new Promise<Card>((resolve, reject) => {
              reject(new Error("Deck has no previous cards"));  
        });
    }
}