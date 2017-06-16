"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Deck {
    constructor(retriever) {
        this.retriever = retriever;
    }
    getNextCard() {
        return this.retriever.getNextCard();
    }
    getPreviousCard() {
        return this.retriever.getPreviousCard();
    }
}
exports.Deck = Deck;
//# sourceMappingURL=deck.js.map