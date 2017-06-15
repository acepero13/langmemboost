import { Iterator } from './iterator';
import { Card } from '../../card'
import { AbstractIterator } from './abstractiterator';
export class SequentialIterator<T> extends AbstractIterator<T> {
    
    private nextWasCalled:boolean = false;
    private previousWasCalled:boolean = false;
    
    public constructor(items: Array<T>) {
        super(items);
    }
    public next(): T {
        if (this.hasNext()) {
            this.positionBeforeNext();
            return this.items[this.index++];
        }
        throw new Error('Item has no next');
    }

    public previous(): T {
        if (this.hasPrevious()) {
            this.positionBeforePrevious();
            return this.items[--this.index];
        }
        throw new Error('Item has no previous');
    }

    private updateCallingFlagsForPrevious(): void{
        this.nextWasCalled = false;
        this.previousWasCalled = true;
    }

    private updateCallingFlagsForNext(): void{
        this.nextWasCalled = true;
        this.previousWasCalled = false;
    }

    private positionBeforeNext():void{
        if(this.previousWasCalled){
            this.index++;
        }  
        this.updateCallingFlagsForNext();
    }
    
    private positionBeforePrevious(): void {
        if(this.nextWasCalled){
            this.index = this.index - 1;
        }
        this.updateCallingFlagsForPrevious();
        
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