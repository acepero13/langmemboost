import { CardProvider } from "../card/providers/cardprovider";
import { Card } from "../card/card";
import { PromiseBuilder } from "../../utils/promisebuilder";
import { FilePromise } from "../../utils/filepromise";
import {Promified} from "../../utils/promified";

export class JsonProvider implements CardProvider {
    promiseReadJson: Promified<Card[]>;
    filename: string;
    private cardsNumber: number;

    public constructor(filenamme: string) {
        this.filename = filenamme;
        this.promiseReadJson = new FilePromise(this.parseJson, this.filename);
    }

    getCards(): Promise<Card[]> {
        return this.promiseReadJson.promise();
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
        }).addPromise(this.promiseReadJson);
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