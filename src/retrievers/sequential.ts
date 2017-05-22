import {Retriever} from './retriever';
import {Card} from '../card'
import {CardProvider} from '../providers/cardprovider'
export class Sequential implements Retriever{
    private cardProvider: CardProvider;

    public constructor(cardProvider: CardProvider){
       this.cardProvider = cardProvider;     
    }

    public getNextCard(): Promise<Card> {
        return new Promise<Card>((resolve, reject) => {
              reject(new Error("Deck has no more cards"));  
        }); 
    }

    public getPreviousCard(): Promise<Card>{
        throw new Error('Not implemented yet.');
    }
}