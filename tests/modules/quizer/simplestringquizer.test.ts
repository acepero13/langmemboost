/// <reference path="../../../typings/globals/mocha/index.d.ts" />
import { expect } from 'chai';
import { SimpleStringQuizer } from "../../../src/modules/quizer/simplestringquizer";
import { Card } from "../../../src/modules/card/card";

describe('Test SimpleStringQuizer', function () {
    it('should on complexity SuperEasy return one wildcard', function () {
        let card = { front: "Front First", back: "Back First" };
        let complexity = 1;
        assertOccurences(card, complexity);
    });
    
    it('should on complexity Easy return two wildcard', function () {
        let card = { front: "Front First", back: "Back First" };
        let complexity = 2;
        assertOccurences(card, complexity);
    });
});

function assertOccurences(card: Card, complexity: number) {
        let quizer = new SimpleStringQuizer(card, complexity, null);
        let result = quizer.retrieveQuiz();
        let countApprances = countStringOccurences(result, '#');
        console.log(result);
        expect(countApprances).to.be.equals(complexity);
}

function countStringOccurences(str: string, toFind: string) {
    return (str.split(toFind).length - 1);
}