import {Promified} from "../../../../utils/promified";
import {Card} from "../../card";
import {CardRetriever} from "../cardretriever";
import {CardProvider} from "../../providers/cardprovider";

export class Cardpromise<Card> extends Promified<Card>{
    cardRetriever: CardRetriever;
    private cardProvider: CardProvider;

    public constructor(cardRetriever:CardRetriever){
        super(null);
        this.cardRetriever = cardRetriever;
        this.cardProvider = cardRetriever.cardProvider;
    }
    protected resolver(resolve: any, reject: any, callback: (...params: any[]) => Card): void {
        this.cardProvider.getCards().then((cards)=>{
            this.cardRetriever.cardIterator.items = cards;
            resolve(cards);
        }).catch((err) => {
            reject(err);
        })
    }

}