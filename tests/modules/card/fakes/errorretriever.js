"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorRetriever {
    getNextCard() {
        return new Promise((resolve, reject) => {
            reject(new Error("Deck has no more cards"));
        });
    }
    getPreviousCard() {
        return new Promise((resolve, reject) => {
            reject(new Error("Deck has no previous cards"));
        });
    }
}
exports.ErrorRetriever = ErrorRetriever;
