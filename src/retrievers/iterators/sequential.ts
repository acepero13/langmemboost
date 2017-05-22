import { Iterator } from '../iterator';
import {Card} from '../../card'
export class SequentialIterator implements Iterator{
    public index: number;
    public items: Array<Card>;

    public constructor(cards: Array<Card>) {
        this.items = cards;
        this.index = 0;
    }

    public next(): Promise<Card> {
        throw new Error('Not implemented yet.');
    }

    public previous(): Promise<Card> {
        throw new Error('Not implemented yet.');
    }

    public hasNext(): boolean {
        return this.index < this.items.length;
    }

    public reset(): void {
        throw new Error('Not implemented yet.');
    }

    public each(callback: (void)): void {
        throw new Error('Not implemented yet.');
    }
}