"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sequential_1 = require("../../../src/modules/card/retrievers/iterators/sequential");
describe('Test Sequential Interator', function () {
    it('should return error on empty array', function () {
        let it = new sequential_1.SequentialIterator([]);
        chai_1.expect(() => it.next()).to.throw('Item has no next');
    });
    it('should return false on hasNext with empty array', function () {
        let it = new sequential_1.SequentialIterator([]);
        chai_1.expect(it.hasNext()).to.be.false;
    });
    it('should return true on hasNext with array with one item', function () {
        let firstCard = { front: "Front First", back: "Back First" };
        let it = new sequential_1.SequentialIterator([firstCard]);
        chai_1.expect(it.hasNext()).to.be.true;
    });
    it('should return card on next with array with one item', function () {
        let firstCard = { front: "Front First", back: "Back First" };
        let it = new sequential_1.SequentialIterator([firstCard]);
        chai_1.expect(it.next()).to.be.equals(firstCard);
    });
    it('should return false on hasPrevious when empty', function () {
        let it = new sequential_1.SequentialIterator([]);
        chai_1.expect(it.hasPrevious()).to.be.false;
    });
    it('should return first card on previous when array with two items and index at last one', function () {
        let firstCard = { front: "Front First", back: "Back First" };
        let secondCard = { front: "Front Second", back: "Back Second" };
        let it = new sequential_1.SequentialIterator([firstCard, secondCard]);
        it.next();
        it.next();
        chai_1.expect(it.previous()).to.be.equals(firstCard);
    });
    it('should return error on getPrevious when at the first item', function () {
        let firstCard = { front: "Front First", back: "Back First" };
        let it = new sequential_1.SequentialIterator([firstCard]);
        it.next();
        chai_1.expect(() => it.previous()).to.throw('Item has no previous');
    });
    it('should return first card on next after reset', function () {
        let firstCard = { front: "Front First", back: "Back First" };
        let it = new sequential_1.SequentialIterator([firstCard]);
        it.next();
        it.reset();
        chai_1.expect(it.next()).to.be.equals(firstCard);
    });
});
describe('TestEach from AbstractITerator', function () {
    it('should iterate over every item when calling each', function () {
        let firstCard = { front: "Front First", back: "Back First" };
        let secondCard = { front: "Front Second", back: "Back Second" };
        let it = new sequential_1.SequentialIterator([firstCard, secondCard]);
        let counter = 0;
        it.each(function (item) {
            counter++;
        });
        chai_1.expect(2).to.be.equals(counter);
    });
});
//# sourceMappingURL=sequentialiterator.test.js.map