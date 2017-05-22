import {Card} from '../card'
export interface Iterator{
    index: number;
    items: Array<Card>;
    next(): Card;
    previous(): Card;
    hasNext():boolean;
    reset():void;
    each(callback: (void)):void;
}