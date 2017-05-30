import { SequentialForRandom } from './sequentialforrandom';
import { RandomIterator } from './random';
import { Iterator } from './iterator';
export class RandomWithNavigation<T> implements Iterator<T>{
    index: number;
    items: T[];
    private randomIterator: RandomIterator<T>;
    private sequentialNavigation: SequentialForRandom<T>;

    public constructor(items: T[]){
        this.sequentialNavigation = new SequentialForRandom<T>([]);
        this.randomIterator = new RandomIterator(items);
    }

    next(): T {
        if(this.sequentialNavigation.hasNext()){
            return this.sequentialNavigation.next();
        }
        let item = this.randomIterator.next();
        this.sequentialNavigation.add(item);
        return item;
    }

    previous(): T {
        if(this.sequentialNavigation.hasPrevious()){
            return this.sequentialNavigation.previous();
        }
        return this.randomIterator.previous();
    }
    hasNext(): boolean {
        return this.sequentialNavigation.hasNext() || this.randomIterator.hasNext();
    }
    hasPrevious(): boolean {
        return this.sequentialNavigation.hasPrevious();
    }
    reset(): void {
        this.sequentialNavigation.reset();
    }
    each(callback: void): void {
        throw new Error("Method not implemented.");
    }

}