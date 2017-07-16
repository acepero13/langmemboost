import {Card} from "../card";

export interface CardProvider {
    getCards(): Promise<Card[]>;  
    
}
