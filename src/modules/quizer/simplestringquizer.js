"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleStringQuizer {
    constructor(card, complexityLevel, renderer) {
        this.card = card;
        this.complexityLevel = complexityLevel;
        this.renderer = renderer;
    }
    retrieveQuiz() {
        let answer = this.card.back;
        let quiz = answer;
        let wildcardsCount = 0;
        while (wildcardsCount <= this.complexityLevel) {
            let randomCharPos = this.getRandomChar(answer);
            this.replaceAt(quiz, randomCharPos, "#");
        }
        return answer + "#";
    }
    validateQuiz() {
        throw new Error("Method not implemented.");
    }
    rateAnswer() {
        throw new Error("Method not implemented.");
    }
    getRandomChar(answer) {
        let max = answer.length - 1;
        let min = 0;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    replaceAt(str, index, replacement) {
        return str.substr(0, index)
            + replacement
            + str.substr(index + replacement.length);
    }
}
exports.SimpleStringQuizer = SimpleStringQuizer;
//# sourceMappingURL=simplestringquizer.js.map