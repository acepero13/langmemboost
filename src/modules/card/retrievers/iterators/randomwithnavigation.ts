import { SequentialForRandom } from './sequentialforrandom';
import { RandomIterator } from './random';
import { Iterator } from './iterator';
export class RandomWithNavigation<T> implements Iterator<T>{
    index: number;
    items: T[];
    private randomIterator: RandomIterator<T>;
    private cached: SequentialForRandom<T>;

    public constructor(items: T[]){
        this.cached = new SequentialForRandom<T>([]);
        this.randomIterator = new RandomIterator(items);
    }

    next(): T {
        if(this.cached.hasNext()){
            return this.cached.next();
        }
        let item = this.randomIterator.next();
        this.cached.add(item);
        return item;
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
        return this.cached.hasPrevious();
    }
    reset(): void {
        this.cached.reset();
    }
    each(callback: void): void {
        throw new Error("Method not implemented.");
    }

}