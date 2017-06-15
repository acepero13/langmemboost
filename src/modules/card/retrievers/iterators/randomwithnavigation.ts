import { RandomIterator } from './random';
import { Iterator } from './iterator';
import { AbstractIterator } from './abstractiterator';
import { SequentialIterator } from "./sequential";
export class RandomWithNavigation<T> extends AbstractIterator<T>{

    private randomIterator: RandomIterator<T>;
    private cached: SequentialIterator<T>;

    public constructor(items: T[]){
        super(items);
        this.cached = new SequentialIterator<T>([]);
        this.randomIterator = new RandomIterator(items);
    }

    next(): T {
        if(this.cached.hasNext()){
            return this.cached.next();
        }
        let item = this.randomIterator.next();
        this.addItemToCache(item);
        return item;
    }

    private addItemToCache(item: T): void{
        this.cached.items.push(item);
        this.cached.next();
    }

    previous(): T {
        if(this.cached.hasPrevious()){
            return this.cached.previous();
        }
        return this.randomIterator.previous();
    }
    hasNext(): boolean {
        return this.cached.hasNext() || this.randomIterator.hasNext();
    }
    hasPrevious(): boolean {
        return this.cached.hasPrevious() || this.randomIterator.hasPrevious();
    }
    reset(): void {
        this.cached.reset();
    }
}