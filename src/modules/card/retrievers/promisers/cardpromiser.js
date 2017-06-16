"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CardPromiser {
    constructor(cardIterator, cardProvider, resolver, rejecter, getCardFromSequence) {
        this.cardIterator = cardIterator;
        this.rejecter = rejecter;
        this.resolver = resolver;
        this.cardProvider = cardProvider;
        this.getCardCallback = getCardFromSequence;
    }
    promiseCard() {
        if (this.isIteratorNotInitialized()) {
            this.initIteratorAndResolveCard();
        }
        else {
            this.resolveCard();
        }
    }
    isIteratorNotInitialized() {
        return this.cardIterator.items == null || this.cardIterator.items.length == 0;
    }
    initIteratorAndResolveCard() {
        this.cardProvider.getCards().then((cards) => {
            this.cardIterator.items = cards;
            this.resolveCard();
        });
    }
    resolveCard() {
        try {
            let card = this.getCardCallback(this.cardIterator);
            this.resolver(card);
        }
        catch (err) {
            this.rejecter(new Error("Deck has no more cards"));
        }
    }
}
exports.CardPromiser = CardPromiser;
//# sourceMappingURL=cardpromiser.js.map