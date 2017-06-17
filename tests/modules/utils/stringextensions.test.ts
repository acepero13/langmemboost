/// <reference path="../../../typings/globals/mocha/index.d.ts" />
/// <reference path="../../../src/utils/stringextensions.ts" />
import { expect } from 'chai';
import "../../../src/utils/stringextensions"

describe('Test string extensions', function(){
    it('should return false whith non empty string', function(){
        expect("Hello World".isEmpty()).to.be.false;
    });

    it('should return true whith on empty string', function(){
        expect("".isEmpty()).to.be.true;
    });

    it('should return true with text containgin subtext', function(){
        expect("Hello world".contains("world")).to.be.true;
    });

     it('should return false with text NOT containgin subtext', function(){
        expect("Hello world".contains("text")).to.be.false;
    });

    it('should return random char from text', function(){
        expect("Hello world".randomCharIndex()).to.be.greaterThan(-1);
    });

    it('should replace text with subtext', function(){
        expect("Hello world".replaceCharAt(4, " ")).to.be.equals("Hell  world");
    });

    it('should return 3 occurrences for text', function(){
        expect("Hello world".countOccurrences("l")).to.be.equals(3);
        expect("Hello world".countOccurrences("ll")).to.be.equals(1);
    });

});