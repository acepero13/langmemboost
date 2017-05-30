import { Iterator } from './iterator';
import { Card } from '../../card'
export class SequentialIterator<T> implements Iterator<T> {
    public index: number;
    public items: Array<T>;

    public constructor(items: Array<T>) {
        this.items = items;
        this.index = 0;
    }
    public next(): T {
        if (this.hasNext()) {
            return this.items[this.index++];
        }
        throw new Error('Item has no next');
    }

    public previous(): T {
        if (this.hasPrevious()) {
            this.positionAtLastReturnedItem();
            return this.items[--this.index];
        }
        throw new Error('Item has no previous');
    }

    private positionAtLastReturnedItem(): void {
        this.index = this.index - 1;
    }

    public hasNext(): boolean {
        return this.items.length > this.index ;
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