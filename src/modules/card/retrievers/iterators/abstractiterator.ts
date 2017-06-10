import {Iterator} from './iterator';

export abstract class AbstractIterator<T> implements Iterator​​<T>{
    index: number;
    items: T[];

    abstract next(): T;
    abstract previous(): T;
    abstract hasNext(): boolean ;
    abstract hasPrevious(): boolean ;
    abstract reset(): void;
    
    public constructor(items: Array<T>){
        this.items = items;
        this.index = 0;
    }


    each(callback: (item: T)=> any): void {
        for(let i = 0; i < this.items.length; i++){
            let item = this.items[i];
            callback(item);
        }
    }

}