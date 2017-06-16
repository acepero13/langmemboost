"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cardpromiser_1 = require("./promisers/cardpromiser");
class CardRetriever {
    constructor(cardProvider, cardIterator) {
        this.cardProvider = cardProvider;
        this.cardIterator = cardIterator;
    }
    getNextCard() {
        let self = this;
        return new Promise((resolve, reject) => {
            let cardPromiser = new cardpromiser_1.CardPromiser(self.cardIterator, self.cardProvider, resolve, reject, getNextCardFromIt);
            cardPromiser.promiseCard();
        });
    }
    getPreviousCard() {
        let self = this;
        return new Promise((resolve, reject) => {
            let cardPromiser = new cardpromiser_1.CardPromiser(self.cardIterator, self.cardProvider, resolve, reject, getPreviousCardFromIt);
            cardPromiser.promiseCard();
        });
    }
}
exports.CardRetriever = CardRetriever;
function getNextCardFromIt(it) {
    return it.next();
}
function getPreviousCardFromIt(it) {
    return it.previous();
}
//# sourceMappingURL=cardretriever.js.map