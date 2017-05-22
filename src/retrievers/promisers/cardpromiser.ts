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
    public constructor(context: Sequential, cardProvider: CardProvider, resolver?:any, rejecter?:any){
        this.context = context;
        this.rejecter = rejecter;
        this.resolver = resolver;
        this.cardProvider = cardProvider;
    }

    promiseCard() :void{
        try{
            this.tryToResolveCard();
        }catch(err){
            console.log(err);
            this.rejecter(new Error("Deck has no more cards"));
        }     
    }

    private tryToResolveCard():void{
        if(this.isIteratorInitialized()){
            this.initIteratorAndResolveCard();
        }else{
            this.resolveCard();
        }
    }

     private isIteratorInitialized():boolean{
        return this.context.getIterator() == null;
    }

    private initIteratorAndResolveCard(){
        var self = this;
        this.cardProvider.getCards().then((cards) =>{
            self.sequentialIt = new SequentialIterator(cards);
            this.resolveCard();
        });
    }

    private resolveCard(){
            let card = this.sequentialIt.next();
            this.resolver(card);
    }
}