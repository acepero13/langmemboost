import { Iterator } from './iterator';
import { Card } from '../../card'
import { AbstractIterator } from './abstractiterator';
export class SequentialIterator<T> extends AbstractIterator<T> {

    public constructor(items: Array<T>) {
        super(items);
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

    public hasPrevious(): boolean {
        return this.index > 1;
    }
}