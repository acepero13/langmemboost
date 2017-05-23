import { Iterator } from '../iterator';
import { Card } from '../../card'
export class SequentialIterator implements Iterator {
    public index: number;
    public items: Array<Card>;

    public constructor(cards: Array<Card>) {
        this.items = cards;
        this.index = 0;
    }

    public next(): Card {
        if (this.hasNext()) {
            return this.items[this.index++];
        }
        throw new Error('Item has no next');
    }

    public previous(): Card {
        if (this.hasPrevious()) {
            this.positionAtLastReturnedItem();
            let card = this.items[--this.index];
            return card;
        }
        throw new Error('Item has no previous');
    }

    private positionAtLastReturnedItem(): void {
        this.index = this.index - 1;
    }

    public hasNext(): boolean {
        return this.index < this.items.length;
    }

    public reset(): void {
        this.index = 0;
    }

    public each(callback: (void)): void {
        throw new Error('Not implemented yet.');
    }

    public hasPrevious(): boolean {
        return this.index > 1;
    }
}