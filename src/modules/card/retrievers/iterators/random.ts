import { SequentialIterator } from './sequential';
import { AbstractIterator } from './abstractiterator';
export class RandomIterator<T> extends AbstractIterator<T>{

    public constructor(items: Array<T>) {
        super(items);
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
    

    private getRandomIndex() {
        let max = this.items.length - 1;
        let min = 0;
        return Math.floor(Math.random() * (max - min + 1) + min);              
    }
}