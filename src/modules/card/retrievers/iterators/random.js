"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstractiterator_1 = require("./interfaces/abstractiterator");
class RandomIterator extends abstractiterator_1.AbstractIterator {
    constructor(items) {
        super(items);
    }
    next() {
        if (this.hasNext()) {
            let randomIndex = this.getRandomIndex();
            return this.pop(randomIndex);
        }
        throw new Error('Item has no next');
    }
    pop(index) {
        let item = this.items[index];
        this.items.splice(index, 1);
        return item;
    }
    previous() {
        throw new Error('Item has no previous');
    }
    hasNext() {
        return this.items.length > 0;
    }
    hasPrevious() {
        return false;
    }
    reset() {
        throw new Error('Not supported.');
    }
    getRandomIndex() {
        let max = this.items.length - 1;
        let min = 0;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
exports.RandomIterator = RandomIterator;
//# sourceMappingURL=random.js.map