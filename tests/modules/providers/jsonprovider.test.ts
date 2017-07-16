/// <reference path="../../../typings/globals/mocha/index.d.ts" />
import {expect} from 'chai';
import { JsonProvider } from "../../../src/modules/providers/jsonprovider";

describe('On Existing file', function(){
    it('should return all cards from file', function(){
        let provider = new JsonProvider("tests/res/cards.json");
        return provider.getCards().then(cards => { 
            console.log(cards) ;
            expect(cards.length).to.be.equals(2);
        });
    });

    it('should return error on non existing file', function(){
        let provider = new JsonProvider("tests/res/nonExisting.json");
        return provider.getCards().then(cards => { 
            expect(false).to.be.true;
        }).catch(function(){
            expect(true).to.be.true;
        });
    })
});