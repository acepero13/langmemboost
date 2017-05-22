import {Card} from '../card'
export interface Iterator{
    index: number;
    items: Array<Card>;
    next(): Promise<Card>;
    previous(): Promise<Card>;
    hasNext():boolean;
    reset():void;
    each(callback: (void)):void;
}