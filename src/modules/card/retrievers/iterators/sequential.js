"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstractiterator_1 = require("./interfaces/abstractiterator");
class SequentialIterator extends abstractiterator_1.AbstractIterator {
    constructor(items) {
        super(items);
        this.nextWasCalled = false;
        this.previousWasCalled = false;
    }
    next() {
        if (this.hasNext()) {
            return this.getNextItem();
        }
        throw new Error('Item has no next');
    }
    getNextItem() {
        this.positioningBeforeNext();
        return this.items[this.index++];
    }
    previous() {
        if (this.hasPrevious()) {
            return this.getPreviousItem();
        }
        throw new Error('Item has no previous');
    }
    getPreviousItem() {
        this.positioningBeforePrevious();
        return this.items[--this.index];
    }
    positioningBeforeNext() {
        if (this.previousWasCalled) {
            this.index++;
        }
        this.updateCallingFlagsForNext();
    }
    positioningBeforePrevious() {
        if (this.nextWasCalled) {
            this.index = this.index - 1;
        }
        this.updateCallingFlagsForPrevious();
    }
    hasNext() {
        return this.items.length > this.index;
    }
    reset() {
        this.index = 0;
    }
    hasPrevious() {
        return this.index > 1;
    }
    updateCallingFlagsForPrevious() {
        this.nextWasCalled = false;
        this.previousWasCalled = true;
    }
    updateCallingFlagsForNext() {
        this.nextWasCalled = true;
        this.previousWasCalled = false;
    }
}
exports.SequentialIterator = SequentialIterator;
//# sourceMappingURL=sequential.js.map