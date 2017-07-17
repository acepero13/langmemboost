/// <reference path="../../../typings/globals/mocha/index.d.ts" />
import {expect} from 'chai';
import { JsonProvider } from "../../../src/modules/providers/jsonprovider";

describe('On Existing file', function(){
    it('should return all cards from file', function(){
        let provider = new JsonProvider("tests/res/cards.json");
        return provider.getCards().then(cards => { 
            expect(cards.length).to.be.equals(2);
        });
    });

    it('should return limited number of cards from file', function(){
        let provider = new JsonProvider("tests/res/cards.json");
        return provider.getAtLeast(1).then(cards => { 
            expect(cards.length).to.be.equals(1);
        });
    });
    
});

describe('On non existing file', function(){
    it('should return error on non existing file when getCards', function(){
            let provider = new JsonProvider("tests/res/nonExisting.json");
            return provider.getCards().then(cards => { 
                expect(false).to.be.true;
            }).catch(function(){
                expect(true).to.be.true;
            });
        })

    it('should return error on non existing file when getAtLeast', function(){
            let provider = new JsonProvider("tests/res/nonExisting.json");
            return provider.getAtLeast(1).then(cards => { 
                expect(false).to.be.true;
            }).catch(function(){
                expect(true).to.be.true;
            });
        })
});