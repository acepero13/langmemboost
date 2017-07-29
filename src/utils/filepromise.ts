import { Promified } from "./promified";
var fs = require('fs');
export class FilePromise<T> extends Promified<T>{
     private fs = require('fs');
     private filename:string;

     public constructor(callback: (...params: any[]) => T, filename:string){
        super(callback);
        this.filename = filename;
    }
    protected resolver(resolve: any, reject: any, callback: (...params: any[]) => T): void {
       fs.readFile(this.filename, 'utf-8', function(err,data){
            if(err)
                reject(err);
            else
                resolve(callback(data));
       })
    }

}