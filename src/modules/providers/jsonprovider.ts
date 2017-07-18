import { CardProvider } from "../card/providers/cardprovider";
import { Card } from "../card/card";
import { FilePromiser } from "../card/retrievers/promisers/filepromiser";


export class JsonProvider implements CardProvider {
    filePromiser: FilePromiser<Card[]>;
    filename: string;

    public constructor(filenamme: string) {
        this.filename = filenamme;
        this.filePromiser = new FilePromiser<Card[]>(this.filename);
    }

    getCards(): Promise<Card[]> {

        return this.filePromiser.promise();
    }
    

    getAtLeast(cardNumber: number): Promise<Card[]> {
        let cardPromise = this.filePromiser.promise();
        return new Promise<Card[]>((resolve, reject) => {
            cardPromise.then((cards) => {
                if (cards.length <= cardNumber)
                    resolve(cards);
                else
                    resolve(cards.slice(0, cardNumber));
            }).catch((err) => {
                reject(err);
            });
        });

    }








}