import { CardProvider } from "../card/providers/cardprovider";
import { Card } from "../card/card";
import { PromiseBuilder } from "../../utils/promisebuilder";
import { FilePromise } from "../../utils/filepromise";
import {Promified} from "../../utils/promified";

export class JsonProvider implements CardProvider {
    promiseToRead: Promified<Card[]>;
    filename: string;
    private cardsNumber: number;

    public constructor(filenamme: string) {
        this.filename = filenamme;
        this.promiseToRead = new FilePromise(this.parseJson, this.filename);
    }

    getCards(): Promise<Card[]> {
        return this.promiseToRead.promise();
    }

    getAtLeast(cardNumber: number): Promise<Card[]> {
        this.cardsNumber = cardNumber;
        let builder = this.buildPromise();
        return builder.promise();
    }

    private buildPromise() {
        let builder = new PromiseBuilder<Card[]>();
        builder.add((cards) => {
            return this.sliceCards(cards);
        }).addPromise(this.promiseToRead);
        return builder;
    }

    private parseJson(data): any{
        return JSON.parse(data);
    }

    private sliceCards(cards: Card[]): Card[] {
        if (cards.length <= this.cardsNumber)
            return cards;
        else
            return cards.slice(0, this.cardsNumber);
    }

}