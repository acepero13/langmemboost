import { CardRetriever } from '../cardretriever';

import { CardProvider } from "../../providers/cardprovider";
import { SequentialIterator } from "../iterators/sequential";
import { Iterator } from "../iterators/iterator";
import {Card} from '../../card'

export class CardPromiser {
    private cardIterator: Iterator<Card>;
    private resolver;
    private rejecter;
    private cardProvider: CardProvider;
    private getCardCallback;
    public constructor(cardIterator: Iterator<Card>
                , cardProvider: CardProvider
                , resolver:any, rejecter:any
                , getCardFromSequence: (sequence:Iterator<Card>)=>any){
        this.cardIterator = cardIterator;
        this.rejecter = rejecter;
        this.resolver = resolver;
        this.cardProvider = cardProvider;
        this.getCardCallback = getCardFromSequence;
    }

    public promiseCard():void{
        if(this.isIteratorNotInitialized()){
            this.initIteratorAndResolveCard();
        }else{
            this.resolveCard();
        }
    }
    

     private isIteratorNotInitialized():boolean{
        return this.cardIterator.items == null || this.cardIterator.items.length == 0;
    }

    private initIteratorAndResolveCard(){
        this.cardProvider.getCards().then((cards) =>{
            this.cardIterator.items = cards;
            this.resolveCard();
        });
    }

    private resolveCard(){
        try{
            let card = this.getCardCallback(this.cardIterator);
            this.resolver(card);
        }catch(err){
            this.rejecter(new Error("Deck has no more cards"))
        }
    }
}