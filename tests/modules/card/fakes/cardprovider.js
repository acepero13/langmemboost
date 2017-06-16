"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cardprovider_1 = require("../../../../src/modules/card/providers/cardprovider");
class FakeCardProvider extends cardprovider_1.CardProvider {
    constructor(cards) {
        super();
        this.cards = cards;
    }
    getCards() {
        var self = this;
        return new Promise((resolve, reject) => {
            resolve(self.cards);
        });
    }
}
exports.FakeCardProvider = FakeCardProvider;
