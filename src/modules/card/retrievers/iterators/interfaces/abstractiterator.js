"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractIterator {
    constructor(items) {
        this.items = items;
        this.index = 0;
    }
    each(callback) {
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            callback(item);
        }
    }
}
exports.AbstractIterator = AbstractIterator;
//# sourceMappingURL=abstractiterator.js.map