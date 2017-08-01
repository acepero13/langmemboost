export abstract class Promified<T>{
    child: Promified<T>;
    protected currentPromise: Promise<T>;
    private callback: (...params: any[]) => T;

    public constructor(callback: (...params: any[]) => T) {
        this.callback = callback;
    }

    public promise(): Promise<T> {
        this.createPromise();
        if (this.child != null) {
            return this.createChildPromise();
        }
        return this.currentPromise;
    }

    public addChild(child: Promified<T>): void {
        this.child = child;
    }

   

    protected createPromise():void {
        if (this.currentPromise == null) {
            this.createCurrentPromise();
        }
    }

    protected abstract resolver(resolve, reject, callback: (...params: any[]) => T): void;

    protected childResolver(resolve, reject, callback: (...params: any[]) => T) {
        this.child.promise().then((result) => {
            let childResult = this.callback(result);
            resolve(childResult);
        }).catch((err) => {
            reject(err);
        });
    }

    private createCurrentPromise() {
        this.currentPromise = new Promise((resolve, reject) => {
            this.resolver(resolve, reject, this.callback);
        });
    }

    private createChildPromise() {
        return this.currentPromise = new Promise((resolve, reject) => {
            this.childResolver(resolve, reject, this.callback);
        });
    }

}