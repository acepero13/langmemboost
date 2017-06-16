"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = require("./random");
const abstractiterator_1 = require("./interfaces/abstractiterator");
const sequential_1 = require("./sequential");
class RandomWithNavigation extends abstractiterator_1.AbstractIterator {
    constructor(items) {
        super(items);
        this.cached = new sequential_1.SequentialIterator([]);
        this.randomIterator = new random_1.RandomIterator(items);
    }
    next() {
        if (this.cached.hasNext()) {
            return this.cached.next();
        }
        let item = this.randomIterator.next();
        this.addItemToCache(item);
        return item;
    }
    addItemToCache(item) {
        this.cached.items.push(item);
        this.cached.next();
    }
    previous() {
        if (this.cached.hasPrevious()) {
            return this.cached.previous();
        }
        return this.randomIterator.previous();
    }
    hasNext() {
        return this.cached.hasNext() || this.randomIterator.hasNext();
    }
    hasPrevious() {
        return this.cached.hasPrevious() || this.randomIterator.hasPrevious();
    }
    reset() {
        this.cached.reset();
    }
}
exports.RandomWithNavigation = RandomWithNavigation;
//# sourceMappingURL=randomwithnavigation.js.map