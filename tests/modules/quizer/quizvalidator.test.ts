/// <reference path="../../../typings/globals/mocha/index.d.ts" />
import { expect } from 'chai';
import { QuizValidator } from "../../../src/modules/quizer/quizvalidator";

describe('Test QuizValidator', function(){
    it('should return GOOD when no mistakes made', function(){
        let original = "Hello world";
        let validator = new QuizValidator(original);
        expect(validator.validate(original)).to.be.equals(QuizValidator.GOOD);
    });

    it('should return BAD with one mistake and short word', function(){
        let original = "Hell";
        let validator = new QuizValidator(original);
        expect(validator.validate("ell")).to.be.equals(QuizValidator.BAD);
    });

    it('should return GOOD with one mistake and long  word', function(){
        let original = "Hello world";
        let validator = new QuizValidator(original);
        expect(validator.validate("Hello worl")).to.be.equals(QuizValidator.GOOD);
    });

    it('should return REGULAR with three mistake and long  word', function(){
        let original = "Hello world";
        let validator = new QuizValidator(original);
        expect(validator.validate("Hello worldsss")).to.be.equals(QuizValidator.REGULAR);
    });

    it('should return BAD with  mistakes and long  word', function(){
        let original = "Hello world";
        let validator = new QuizValidator(original);
        expect(validator.validate("Hell worlsss")).to.be.equals(QuizValidator.BAD);
    });
});