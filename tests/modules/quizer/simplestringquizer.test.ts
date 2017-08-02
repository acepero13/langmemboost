/// <reference path="../../../src/utils/stringextensions.ts" />
import { expect } from 'chai';
import { SimpleStringQuizer } from "../../../src/modules/quizer/simplestringquizer";
import { Card } from '../../../src/modules/card/card';
import { QuizLevel } from '../../../src/modules/quizer/quizlevel';
import { QuizValidator } from '../../../src/modules/quizer/quizvalidator';

import '../../../src/utils/stringextensions';

//TODO: Make renderer (with an id so i can have statics like[#Bad with renderer X])

describe('Test SimpleStringQuizer', function () {
    it('should on complexity SuperEasy return one wildcard', function () {
        let card = { front: "Front First", back: "Back First" };
        let complexity = QuizLevel.SUPER_EASY;
        assertOccurences(card, complexity, 3);
    });
    
    it('should on complexity Easy return two wildcard', function () {
        let card = { front: "Front First", back: "Back First" };
        let complexity = QuizLevel.EASY;
        assertOccurences(card, complexity, 5);
    });

    it('should return GOOD when rateAsnwer with good answer', function(){
        let card = { front: "Front First", back: "Back First" };
        let quizer = new SimpleStringQuizer(card, QuizLevel.EASY, null);
        expect(quizer.rateAnswer("Back Frst")).to.be.equals(QuizValidator​​.GOOD);
    });


});

function assertOccurences(card: Card, complexity: number, repetitions: number) {
        let quizer = new SimpleStringQuizer(card, complexity, null);
        let result = quizer.retrieveQuiz();
        let countApprances = result.countOccurrences(SimpleStringQuizer.WILDCARD);
        expect(countApprances).to.be.equals(repetitions);
}