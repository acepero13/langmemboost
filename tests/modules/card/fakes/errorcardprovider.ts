import {CardProvider} from "../../../../src/modules/card/providers/cardprovider";
import {Card} from "../../../../src/modules/card/card";

export class FakeErrorCardProvider implements CardProvider {
    getCards(): Promise<Card[]> {
        return new Promise<Card[]>((resolve, reject) =>{
            reject('Error');
        });
    }

    getAtLeast(cards: number): Promise<Card[]> {
        return new Promise<Card[]>((resolve, reject) =>{
            reject('Error')
        });
    }
}