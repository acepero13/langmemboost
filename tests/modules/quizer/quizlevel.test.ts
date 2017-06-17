/// <reference path="../../../typings/globals/mocha/index.d.ts" />
import { expect } from 'chai';
import { QuizLevel } from "../../../src/modules/quizer/quizlevel";
describe('Text QuizLevel On regular length text', function(){
    it('getNumberOfReplacements for complexity super easy and regular word', function(){
        let quizlevel = new QuizLevel​​("Hello world", QuizLevel.SUPER_EASY);
        expect(quizlevel.getReplacements()).to.be.equals(3);
    });

    it('getNumberOfReplacements for complexity easy and regular word', function(){
        let quizlevel = new QuizLevel​​("Hello world", QuizLevel.EASY);
        expect(quizlevel.getReplacements()).to.be.equals(5);
    });

    it('getNumberOfReplacements for complexity easy and regular word', function(){
        let quizlevel = new QuizLevel​​("Hello world Hello world", QuizLevel.SUPER_EASY);
        expect(quizlevel.getReplacements()).to.be.equals(6);
    });

    it('getNumberOfReplacements for complexity difficult and regular word', function(){
        let quizlevel = new QuizLevel​​("Hello world", QuizLevel.DIFFICULT);
        expect(quizlevel.getReplacements()).to.be.equals(8);
    });

    it('getNumberOfReplacements for complexity superdifficult and regular word', function(){
        let quizlevel = new QuizLevel​​("Hello world", QuizLevel.SUPER_DIFFICULT);
        expect(quizlevel.getReplacements()).to.be.equals(9);
    });

    it('getNumberOfReplacements for complexity superdifficult and short word', function(){
        let quizlevel = new QuizLevel​​("toe", QuizLevel.SUPER_EASY);
        expect(quizlevel.getReplacements()).to.be.equals(1);
    });
});