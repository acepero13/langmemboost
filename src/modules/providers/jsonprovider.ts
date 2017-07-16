import { CardProvider } from "../card/providers/cardprovider";
import { Card } from "../card/card";
import { FilePromiser } from "../card/retrievers/promisers/filepromiser";


export class JsonProvider implements CardProvider{
    filename: string;

    public constructor(filenamme:string){
        this.filename = filenamme;
    }

    getCards(): Promise<Card[]> {
        let filePromiser = new FilePromiser<Card[]>(this.filename);
        return filePromiser.promise();
    }

    

    

    
}