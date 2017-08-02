"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promisebuilder_1 = require("../../../utils/promisebuilder");
const cardpromise_1 = require("./promisers/cardpromise");
class CardRetriever {
    constructor(cardProvider, cardIterator) {
        this.cardProvider = cardProvider;
        this.cardIterator = cardIterator;
    }
    getNextCard() {
        let promiseBuilder = this.promiseCard(() => {
            return this.cardIterator.next();
        });
        return promiseBuilder.promise();
    }
    getPreviousCard() {
        let promiseBuilder = this.promiseCard(() => {
            return this.cardIterator.previous();
        });
        return promiseBuilder.promise();
    }
    isIteratorNotInitialized() {
        return this.cardIterator.items == null || this.cardIterator.items.length == 0;
    }
    promiseCard(getCard) {
        let promiseBuilder = new promisebuilder_1.PromiseBuilder();
        promiseBuilder.add(getCard);
        this.loadIterator(promiseBuilder);
        return promiseBuilder;
    }
    loadIterator(promiseBuilder) {
        if (this.isIteratorNotInitialized()) {
            let cardPromiser = new cardpromise_1.Cardpromise(this);
            promiseBuilder.addPromise(cardPromiser);
        }
    }
}
exports.CardRetriever = CardRetriever;
//# sourceMappingURL=cardretriever.js.map