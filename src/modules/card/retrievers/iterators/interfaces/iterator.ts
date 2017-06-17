export interface Iterator<T> {
    index: number;
    items: Array<T>;
    next(): T;
    previous(): T;
    hasNext(): boolean;
    hasPrevious(): boolean;
    reset(): void;
    each(callback: (item: T) => any): void ;
}