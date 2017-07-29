var fs = require('fs');
export class FilePromiser<T>{
    filename: string;
    callback: any;
    rejecter: any;
    resolver: any;

    public constructor(filename: string) {
        this.filename = filename;
    }

    public promise(): Promise<T>{
        return new Promise<T>((resolve, reject)=>{
            this.resolver = resolve;
            this.rejecter = reject;
            this.readPromise();
        })
    }
    

    private readPromise():void{
        let that = this;
    }

    private funcResolver(err, data, context):void{
        if(err)
            context.rejectPromise(err, context);
        else
            context.resolvePromise(data, context);
    }

    protected rejectPromise(err, context): void{
        context.rejecter(err);
    } 

    protected resolvePromise(data, context): void{
        let cards = JSON.parse(data);
        context.resolver(cards);
    }
}