import { SequentialIterator } from './sequential';


export class SequentialForRandom<T> extends SequentialIterator<T>{
    index: number;
    public items: Array<T>;

    public constructor(items: Array<T>){
        super(items);
    }

    public previous():T{
        if(this.index == this.items.length){
            return super.previous();
        }
        if(this.hasPrevious()){
            return this.items[--this.index];
        }
    }

    public next():T{
        if(this.index == this.items.length || this.index == 0){
            return super.next();
        }
        if(this.hasNext()){
            return this.items[++this.index];
        }
    }

    public add(item: T){
        this.items.push(item);
        this.next();
    }

}