import {RandomIterator} from '../../../src/modules/card/retrievers/iterators/random';
/// <reference path="../../../typings/globals/mocha/index.d.ts" />
import { expect } from 'chai';
import { RandomWithNavigation } from "../../../src/modules/card/retrievers/iterators/randomwithnavigation";
describe('Test Random Iterator with empty array', function () {
    it('should return error when calling next on empty array', function(){
        let it = new RandomWithNavigation([]);
        expect(() => it.next()).to.throw('Item has no next');
    });

    it('should return error when calling previous on empty array', function(){
        let it = new RandomWithNavigation([]);
        expect(() => it.previous()).to.throw('Item has no previous');
    });

    it('should return false when calling hasNext on empty array', function(){
        let it = new RandomWithNavigation([]);
        expect(it.hasNext()).to.be.false;
    });
});



describe('Test Random Iterator with filled array and no navigation used', function(){
    it('should return true when calling hasNext on filled array', function(){
        let it = new RandomWithNavigation([1,2,3,4,5]);
        expect(it.hasNext()).to.be.true;
    });

    it('should return random item when calling next on filled array', function(){
        let it = new RandomWithNavigation([1,2,3,4,5]);
        let res = it.next(); 
        expect(res).to.be.not.null;    
    });

    it('should return previous item when calling previous after next', function(){
        let it = new RandomWithNavigation([1,2,3,4,5]);
        let next = it.next();
        it.next();
        let res = it.previous();
        expect(res).to.be.equals(next); 
    });

    it('should return false when calling hasPrevious', function(){
        let it = new RandomWithNavigation([1,2,3,4,5]);
        let res = it.hasPrevious();
        expect(res).to.be.false;
    });

    
});

describe('Test random iterator with filled array and navigation', function(){
    it('should return navigate on previous and next', function(){
            let it = new RandomWithNavigation([1,2,3,4,5]);
            let first = it.next();
            let second = it.next();
            let third = it.next();
            let fourth = it.next();
            let firstPrev = it.previous();
            let secondPrev = it.previous();
            expect(firstPrev).to.be.equals(third);
            expect(secondPrev).to.be.equals(second); 
        
        });

    it('should return already visited items ofter navigate', function(){
            let it = new RandomWithNavigation([1,2,3,4,5]);
            let first = it.next();
            let second = it.next();
            let third = it.next();
            let fourth = it.next();

            expect(third).to.be.equals(it.previous());
            expect(second).to.be.equals(it.previous()); 
            expect(third).to.be.equals(it.next());
            expect(second).to.be.equals(it.previous());
            expect(third).to.be.equals(it.next());
            expect(fourth).to.be.equals(it.next());

    })

    it('should reset the navigation index on reset', function(){
            let it = new RandomWithNavigation([1,2,3,4,5]);
            let first = it.next();
            let second = it.next();
            let third = it.next();
            let fourth = it.next();

            it.reset();
            expect(first).to.be.equals(it.next());
            
    });

    

});

describe('RandomIterator', function(){
    it('should throw Not Supported Exception when calling reset', function(){
        let it = new RandomIterator​​([]);
        expect(() => it.reset()).to.throw('Not supported.');
    })
});