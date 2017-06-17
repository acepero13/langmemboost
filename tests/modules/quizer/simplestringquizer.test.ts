/// <reference path="../../../typings/globals/mocha/index.d.ts" />
/// <reference path="../../../src/utils/stringextensions.ts" />
import { expect } from 'chai';
import { SimpleStringQuizer } from "../../../src/modules/quizer/simplestringquizer";
import { QuizLevel } from "../../../src/modules/quizer/quizlevel";
import { Card } from "../../../src/modules/card/card";

import "../../../src/utils/stringextensions"

//TODO: Make quiz validator (Levensthein)
//TODO: Make quiz rater (Good, Regular, Bad) 
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
});

function assertOccurences(card: Card, complexity: number, repetitions: number) {
        let quizer = new SimpleStringQuizer(card, complexity, null);
        let result = quizer.retrieveQuiz();
        let countApprances = result.countOccurrences(SimpleStringQuizer.WILDCARD);
        expect(countApprances).to.be.equals(repetitions);
}