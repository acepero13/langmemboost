import {AbstractIterator} from "./interfaces/abstractiterator";
export class SequentialIterator<T> extends AbstractIterator<T> {

    private nextWasCalled: boolean = false;
    private previousWasCalled: boolean = false;

    public constructor(items: Array<T>) {
        super(items);
    }

    public next(): T {
        if (this.hasNext()) {
            return this.getNextItem();
        }
        throw new Error('Item has no next');
    }

    private getNextItem(): T {
        this.positioningBeforeNext();
        return this.items[this.index++]
    }

    public previous(): T {
        if (this.hasPrevious()) {
            return this.getPreviousItem();
        }
        throw new Error('Item has no previous');
    }

    private getPreviousItem(): T {
        this.positioningBeforePrevious();
        return this.items[--this.index];
    }

    private positioningBeforeNext(): void {
        if (this.previousWasCalled) {
            this.index++;
        }
        this.updateCallingFlagsForNext();
    }

    private positioningBeforePrevious(): void {
        if (this.nextWasCalled) {
            this.index = this.index - 1;
        }
        this.updateCallingFlagsForPrevious();
    }

    public hasNext(): boolean {
        return this.items.length > this.index;
    }

    public reset(): void {
        this.index = 0;
    }

    public hasPrevious(): boolean {
        return this.index > 1;
    }

    private updateCallingFlagsForPrevious(): void {
        this.nextWasCalled = false;
        this.previousWasCalled = true;
    }

    private updateCallingFlagsForNext(): void {
        this.nextWasCalled = true;
        this.previousWasCalled = false;
    }
}