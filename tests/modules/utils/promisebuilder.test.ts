/// <reference path="../../../typings/globals/mocha/index.d.ts" />
import { expect } from 'chai';
import { PromiseBuilder } from "../../../src/utils/promisebuilder";


describe('PromiseBuilder build Promise from one callback', () => {
    it('should create Promise Builder', () => {
        let builder = new PromiseBuilder();
        expect(builder).to.be.instanceOf(PromiseBuilder);

    });
    

    it('should create new promise from callback', () => {
        let builder = new PromiseBuilder();
        builder.add(function(){
            return "Hello";
        });

        return builder.promise().then((result) =>{
            expect(result).to.be.equals("Hello");
        }).catch((err) =>{
            expect(true).to.be.false;
        });
    });
});

describe('PromiseBuilder build promise more callbacks', () => {
    it('should return combined result from second callback', () => {
        let builder = new PromiseBuilder();
        builder
        .add(function(result){
            let res = result + " World";
            console.log(res);
            return  res;
        }).add(function(){
            return 'Hello';
        });

        return builder.promise().then((result) =>{
            expect(result).to.be.equals("Hello World");
        }).catch((err) =>{
            expect(true).to.be.false;
        });
    });
});

