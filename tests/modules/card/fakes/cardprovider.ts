import {CardProvider} from '../../../../src/modules/card/providers/cardprovider';
import {Card} from '../../../../src/modules/card/card'
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