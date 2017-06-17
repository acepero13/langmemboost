import { LevensteinDistance } from '../../../src/utils/levenstein';

/// <reference path="../../../typings/globals/mocha/index.d.ts" />
import { expect } from 'chai';


describe('Test string extensions', function(){
    it('should compute levenshtin distancefor two text', function(){
        let levenstein = new LevensteinDistance();
        expect(levenstein.distance("Hello", "Helo")).to.be.equals(1);
        expect(levenstein.distance("Hello world","Helo wold")).to.be.equals(2);
        expect(levenstein.distance("Hello world","Hello world")).to.be.equals(0);
        expect(levenstein.distance("Hello world","hELLO WORLD")).to.be.equals(9);
    });

    it('should compute levenshtin distancefor two text ignoring cases', function(){
        let levenstein = new LevensteinDistance(true);
        expect(levenstein.distance("Hello world","hELLO WORLD")).to.be.equals(0);
    });

     it('should compute levenshtin distancefor double for substitution', function(){
        let levenstein = new LevensteinDistance(false, 2);
        expect(levenstein.distance("Hello", "Helro")).to.be.equals(2);
    });

    it('should compute against Length On str empty', function(){
        let levenstein = new LevensteinDistance();
        expect(levenstein.distance("", "Helro")).to.be.equals(5);
    });
    it('should compute str Length On against empty', function(){
        let levenstein = new LevensteinDistance();
        expect(levenstein.distance("Hello", "")).to.be.equals(5);
    });
});