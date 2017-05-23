import {Card} from '../card'
export interface Retriever{
    getNextCard(): Promise<Card>;
    getPreviousCard(): Promise<Card>;
}