import { Quizer } from "./interfaces/quizer";
import { Card } from "../card/card";

export class SimpleStringQuizer implements Quizer {

    static readonly WILDCARD = '#';
    quiz: string;
    answer: string;
    card: Card;
    renderer: any;
    complexityLevel: number;

    public constructor(card: Card, complexityLevel: number, renderer: any) {
        this.card = card;
        this.complexityLevel = complexityLevel;
        this.renderer = renderer;
        this.answer = this.card.back;
        this.quiz = this.answer;
    }


    retrieveQuiz(): string {
        let wildcardsCount = 0;
        while (wildcardsCount < this.complexityLevel) {
            wildcardsCount = this.replaceCharRandomly(wildcardsCount);
        }
        return this.quiz;
    }

    private replaceCharRandomly(wildcardsCount): number {
        let randomCharPos = this.getRandomChar(this.quiz);
        if (this.characterIsNotWildcard (randomCharPos)){
            this.quiz = this.replaceAt(this.quiz, 
                randomCharPos, SimpleStringQuizer.WILDCARD);
            wildcardsCount++;
        }
        return wildcardsCount;
    }

    private  characterIsNotWildcard(randomCharPos:number):boolean {
        return this.quiz[randomCharPos] != SimpleStringQuizer.WILDCARD
    }
    validateQuiz(): number {
        throw new Error("Method not implemented.");
    }
    rateAnswer(): number {
        throw new Error("Method not implemented.");
    }

    private getRandomChar(answer) {
        let max = answer.length - 1;
        let min = 0;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    private replaceAt(str: string, index: number, replacement: string): string {
        return str.substr(0, index)
            + replacement
            + str.substr(index + replacement.length);
    }

}