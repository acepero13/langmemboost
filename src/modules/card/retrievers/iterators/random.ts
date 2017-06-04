import { SequentialIterator } from './sequential';
import { Iterator } from './iterator';
export class RandomIterator<T> implements Iterator<T>{
    public index: number;
    public items: Array<T>;

    public constructor(items: Array<T>) {
        this.items = items;
        this.index = 0;
    }

    public next(): T {
        if(this.hasNext()){
           let randomIndex = this.getRandomIndex();
           return this.pop(randomIndex);    
        }
        throw new Error('Item has no next');
    }

    private pop(index: number): T{
        let item =  this.items[index];  
        this.items.splice(index, 1);
        return item;  
    }

    public previous(): T {
        throw new Error('Item has no previous');
    } 

    public hasNext(): boolean {
        return this.items.length > 0;
    }

    public hasPrevious(): boolean {
        return false;
    }

    public reset(): void {
        throw new Error('Not supported.');
    }

    public each(callback: (void)): void {
        throw new Error('Not implemented yet.');
    }

    private getRandomIndex() {
        let max = this.items.length - 1;
        let min = 0;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}