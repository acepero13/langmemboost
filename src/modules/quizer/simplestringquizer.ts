/// <reference path="../../utils/stringextensions.ts" />
import { Quizer } from "./interfaces/quizer";
import { Card } from "../card/card";
import "../../utils/stringextensions"
import { QuizLevel } from "./quizlevel";

export class SimpleStringQuizer implements Quizer {
    
    static readonly WILDCARD = '#';
    quiz: string;
    answer: string;
    card: Card;
    renderer: any;
    replacements: number;
    wildcardsCount: number;

    public constructor(card: Card, complexityLevel: number, renderer: any) {
        this.card = card;
        
        this.renderer = renderer;
        this.answer = this.card.back;
        this.quiz = this.answer;
        let quizLevel = new QuizLevel(this.answer, complexityLevel);
        this.replacements = quizLevel.getReplacements();
    }

    retrieveQuiz(): string {
        this.wildcardsCount = 0;
        while (this.notEnoughtWildCards()) {
            this.replaceCharRandomly();
        }
        return this.quiz;
    }
    private notEnoughtWildCards():boolean{
        return this.wildcardsCount < this.replacements
    }
    
    private replaceCharRandomly(): void {
        let randomCharPos = this.quiz.randomCharIndex();
        if (this.characterIsNotWildcard (randomCharPos)){
            this.quiz = this.quiz.replaceCharAt(randomCharPos, SimpleStringQuizer.WILDCARD);
            this.wildcardsCount++;
        }
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

    render(): void {
        throw new Error("Method not implemented.");
    }

}