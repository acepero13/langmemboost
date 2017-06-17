import {Card} from "./card";
import {Retriever} from "./retrievers/retriever";

export class Deck {
    private retriever: Retriever;

    public constructor(retriever: Retriever) {
        this.retriever = retriever;
    }

    getNextCard(): Promise<Card> {
        return this.retriever.getNextCard();
    }

    getPreviousCard(): Promise<Card> {
        return this.retriever.getPreviousCard();
    }
}