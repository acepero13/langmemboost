import {Iterator} from "./iterators/interfaces/iterator";
import {Retriever} from "./retriever";
import {Card} from "../card";
import {CardProvider} from "../providers/cardprovider";
import {CardPromiser} from "./promisers/cardpromiser";
import {PromiseBuilder} from '../../../utils/promisebuilder';
import {Cardpromise} from "./promisers/cardpromise";

export class CardRetriever implements Retriever {
    public cardProvider: CardProvider;
    public cardIterator: Iterator<Card>;

    public constructor(cardProvider: CardProvider, cardIterator: Iterator<Card>) {
        this.cardProvider = cardProvider;
        this.cardIterator = cardIterator;
    }

    public getNextCard(): Promise<Card> {
        let promiseBuilder = this.promiseCard(() => {
            return this.cardIterator.next();
        });
        return promiseBuilder.promise();

    }

    public getPreviousCard(): Promise<Card> {
        let promiseBuilder = this.promiseCard(() => {
            return this.cardIterator.previous();
        });
        return promiseBuilder.promise();
    }

     private isIteratorNotInitialized(): boolean {
        return this.cardIterator.items == null || this.cardIterator.items.length === 0;
    }

    private promiseCard(getCard: () => Card) {
        let promiseBuilder = new PromiseBuilder<Card>();
        promiseBuilder.add(getCard);
        this.loadIterator(promiseBuilder);
        return promiseBuilder;
    }

    private loadIterator(promiseBuilder: PromiseBuilder<Card>) {
        if (this.isIteratorNotInitialized()){
            let cardPromiser = new Cardpromise<Card>(this);
            promiseBuilder.addPromise(cardPromiser);
        }
    }
}
