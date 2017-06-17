import {Iterator} from "./iterators/interfaces/iterator";
import {Retriever} from "./retriever";
import {Card} from "../card";
import {CardProvider} from "../providers/cardprovider";
import {CardPromiser} from "./promisers/cardpromiser";

export class CardRetriever implements Retriever {
    private cardProvider: CardProvider;
    public cardIterator: Iterator<Card>;

    public constructor(cardProvider: CardProvider, cardIterator: Iterator<Card>) {
        this.cardProvider = cardProvider;
        this.cardIterator = cardIterator;
    }


    public getNextCard(): Promise<Card> {
        let self = this;
        return new Promise<Card>((resolve, reject) => {
            let cardPromiser = new CardPromiser(self.cardIterator, self.cardProvider, resolve, reject, getNextCardFromIt);
            cardPromiser.promiseCard();
        });
    }

    public getPreviousCard(): Promise<Card> {
        let self = this;
        return new Promise<Card>((resolve, reject) => {
            let cardPromiser = new CardPromiser(self.cardIterator, self.cardProvider, resolve, reject, getPreviousCardFromIt);
            cardPromiser.promiseCard();
        });
    }
}

function getNextCardFromIt(it: Iterator<Card>) {
    return it.next();
}
function getPreviousCardFromIt(it: Iterator<Card>) {
    return it.previous();
}