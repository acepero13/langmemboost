"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const simplestringquizer_1 = require("../../../src/modules/quizer/simplestringquizer");
describe('Test SimpleStringQuizer', function () {
    it('should on complexity SuperEasy return one wildcard', function () {
        console.log("HOLA MUNDO!!!1");
        let card = { front: "Front First", back: "Back First" };
        let complexity = 1;
        let renderer = null;
        let quizer = new simplestringquizer_1.SimpleStringQuizer(card, complexity, renderer);
        let result = quizer.retrieveQuiz();
        let countApprances = countStringOccurences(result, '#');
        chai_1.expect(countApprances).to.be.equals(complexity);
    });
    it('should on complexity Easy return two wildcard', function () {
        let card = { front: "Front First", back: "Back First" };
        let complexity = 2;
        let renderer = null;
        let quizer = new simplestringquizer_1.SimpleStringQuizer(card, complexity, renderer);
        let result = quizer.retrieveQuiz();
        let countApprances = countStringOccurences(result, '#');
        console.log(result);
        console.log("HOLA MUNDO!!!");
        chai_1.expect(countApprances).to.be.equals(complexity);
    });
});
function countStringOccurences(str, toFind) {
    return (str.split(toFind).length - 1);
}
