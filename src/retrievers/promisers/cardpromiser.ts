
import { Sequential } from '../sequential';
import { CardProvider } from "../../providers/cardprovider";
import { SequentialIterator } from "../iterators/sequential";
import { Iterator } from "../iterator";



export class CardPromiser {
    private context: Sequential;
    private resolver;
    private rejecter;
    private cardProvider: CardProvider;
    private sequentialIt: Iterator; 
    private getCardCallback;
    public constructor(context: Sequential
                , cardProvider: CardProvider
                , resolver:any, rejecter:any
                , getCardFromSequence: (sequence:Iterator)=>any){
        this.context = context;
        this.rejecter = rejecter;
        this.resolver = resolver;
        this.cardProvider = cardProvider;
        this.getCardCallback = getCardFromSequence;
    }

    public promiseCard():void{
        if(this.isIteratorInitialized()){
            this.initIteratorAndResolveCard();
        }else{
            this.resolveCard();
        }
    }

     private isIteratorInitialized():boolean{
        return this.context.sequentialIt == null;
    }

    private initIteratorAndResolveCard(){
        var self = this;
        this.cardProvider.getCards().then((cards) =>{
            this.context.sequentialIt = new SequentialIterator(cards);
            this.resolveCard();
        });
    }

    private resolveCard(){
        try{
            let card = this.getCardCallback(this.context.sequentialIt);
            this.resolver(card);
        }catch(err){
            this.rejecter(new Error("Deck has no more cards"))
        }
    }
}