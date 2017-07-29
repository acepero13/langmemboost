import { CardProvider } from "../card/providers/cardprovider";
import { Card } from "../card/card";
import { FilePromiser } from "../card/retrievers/promisers/filepromiser";
import { PromiseBuilder } from "../../utils/promisebuilder";
import {Promified} from "../../utils/promified";
import {FilePromise} from "../../utils/filepromise";

var fs = require('fs');
export class JsonProvider implements CardProvider {
    promiseToRead: FilePromise<Card[]>;
    filename: string;

    public constructor(filenamme: string) {
        this.filename = filenamme;
        this.promiseToRead = new FilePromise(function(data){
            let cards = JSON.parse(data);
            return cards;
        }, this.filename);
    }

    getCards(): Promise<Card[]> {
        return this.promiseToRead.promise();
    }


    getAtLeast(cardNumber: number): Promise<Card[]> {
        

        let builder = new PromiseBuilder<Card[]>();
        builder.add(function (cards) {
            if (cards.length <= cardNumber)
                return cards;
            else
                return cards.slice(0, cardNumber);
        }).addPromise(this.promiseToRead);

        return builder.promise();


    }

}