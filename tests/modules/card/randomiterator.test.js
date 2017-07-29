"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = require("../../../src/modules/card/retrievers/iterators/random");
const chai_1 = require("chai");
const randomwithnavigation_1 = require("../../../src/modules/card/retrievers/iterators/randomwithnavigation");
describe('Test Random Iterator with empty array', function () {
    it('should return error when calling next on empty array', function () {
        let it = new randomwithnavigation_1.RandomWithNavigation([]);
        chai_1.expect(() => it.next()).to.throw('Item has no next');
    });
    it('should return error when calling previous on empty array', function () {
        let it = new randomwithnavigation_1.RandomWithNavigation([]);
        chai_1.expect(() => it.previous()).to.throw('Item has no previous');
    });
    it('should return false when calling hasNext on empty array', function () {
        let it = new randomwithnavigation_1.RandomWithNavigation([]);
        chai_1.expect(it.hasNext()).to.be.false;
    });
});
describe('Test Random Iterator with filled array and no navigation used', function () {
    it('should return true when calling hasNext on filled array', function () {
        let it = new randomwithnavigation_1.RandomWithNavigation([1, 2, 3, 4, 5]);
        chai_1.expect(it.hasNext()).to.be.true;
    });
    it('should return random item when calling next on filled array', function () {
        let it = new randomwithnavigation_1.RandomWithNavigation([1, 2, 3, 4, 5]);
        let res = it.next();
        chai_1.expect(res).to.be.not.null;
    });
    it('should return previous item when calling previous after next', function () {
        let it = new randomwithnavigation_1.RandomWithNavigation([1, 2, 3, 4, 5]);
        let next = it.next();
        it.next();
        let res = it.previous();
        chai_1.expect(res).to.be.equals(next);
    });
    it('should return false when calling hasPrevious', function () {
        let it = new randomwithnavigation_1.RandomWithNavigation([1, 2, 3, 4, 5]);
        let res = it.hasPrevious();
        chai_1.expect(res).to.be.false;
    });
});
describe('Test random iterator with filled array and navigation', function () {
    it('should return navigate on previous and next', function () {
        let it = new randomwithnavigation_1.RandomWithNavigation([1, 2, 3, 4, 5]);
        let first = it.next();
        let second = it.next();
        let third = it.next();
        let fourth = it.next();
        let firstPrev = it.previous();
        let secondPrev = it.previous();
        chai_1.expect(firstPrev).to.be.equals(third);
        chai_1.expect(secondPrev).to.be.equals(second);
    });
    it('should return already visited items ofter navigate', function () {
        let it = new randomwithnavigation_1.RandomWithNavigation([1, 2, 3, 4, 5]);
        let first = it.next();
        let second = it.next();
        let third = it.next();
        let fourth = it.next();
        chai_1.expect(third).to.be.equals(it.previous());
        chai_1.expect(second).to.be.equals(it.previous());
        chai_1.expect(third).to.be.equals(it.next());
        chai_1.expect(second).to.be.equals(it.previous());
        chai_1.expect(third).to.be.equals(it.next());
        chai_1.expect(fourth).to.be.equals(it.next());
    });
    it('should reset the navigation index on reset', function () {
        let it = new randomwithnavigation_1.RandomWithNavigation([1, 2, 3, 4, 5]);
        let first = it.next();
        let second = it.next();
        let third = it.next();
        let fourth = it.next();
        it.reset();
        chai_1.expect(first).to.be.equals(it.next());
    });
});
describe('RandomIterator', function () {
    it('should throw Not Supported Exception when calling reset', function () {
        let it = new random_1.RandomIterator([]);
        chai_1.expect(() => it.reset()).to.throw('Not supported.');
    });
});
//# sourceMappingURL=randomiterator.test.js.map