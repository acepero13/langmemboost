import {CardProvider} from '../../src/providers/cardprovider';
import {Card} from '../../src/card'
export class FakeCardProvider extends CardProvider{
    private cards: Array<Card>;
    public constructor(cards: Array<Card>){
        super();
        this.cards = cards;
    }

   getCards(): Promise<Card[]>{
       var self = this;
        return new Promise<Card[]>((resolve, reject) =>{
            resolve(self.cards);
        });
    }
}