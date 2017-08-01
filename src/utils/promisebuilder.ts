import { Promified } from './promified';
import { DefaultPromise } from "./defaultpromise";
export class PromiseBuilder<T>{


    private firstPromise: Promified<T>;

    public add(callback: (...params: any[]) => T): PromiseBuilder<T> {
        if(this.firstPromise == null)
            this.firstPromise = new DefaultPromise(callback);
        else{
            let childPromise = new DefaultPromise(callback);
            this.firstPromise.addChild(childPromise);
        }
        return this;
    }

    public addPromise(promised: Promified<T>): PromiseBuilder<T>{
         if(this.firstPromise == null)
            this.firstPromise = promised;
        else{
            let childPromise = promised;
            this.firstPromise.addChild(childPromise);
        }
        return this;
    }

    public promise(): Promise<T> {
        return this.firstPromise.promise();
    }

    


}