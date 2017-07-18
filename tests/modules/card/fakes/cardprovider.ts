import {CardProvider} from '../../../../src/modules/card/providers/cardprovider';
import {Card} from '../../../../src/modules/card/card'
export class FakeCardProvider implements CardProvider{
    getAtLeast(cards: number): Promise<Card[]> {
        return undefined;
    }
    private cards: Array<Card>;
    public constructor(cards: Array<Card>){
        this.cards = cards;
    }

   getCards(): Promise<Card[]>{
       var self = this;
        return new Promise<Card[]>((resolve, reject) =>{
            resolve(self.cards);
        });
    }
}