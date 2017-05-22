import {Card} from '../card'
export class CardProvider{
    getCards(): Promise<Card[]>{
        throw new Error("Not Implemented");
    }
}
