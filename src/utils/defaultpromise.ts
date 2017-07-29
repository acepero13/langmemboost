import { Promified } from "./promified";

export class DefaultPromise<T> extends Promified<T>{

    public constructor(callback: (...params: any[]) => T){
        super(callback);
    }
    protected resolver (resolve, reject, callback: (...params: any[])=>T): void{
        try{
            let result = callback();
            resolve(result);
        }catch(err){
            reject(err);
        }
    }
}