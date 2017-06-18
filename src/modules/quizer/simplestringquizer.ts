/// <reference path="../../utils/stringextensions.ts" />
import {Quizer} from "./interfaces/quizer";
import {Card} from "../card/card";
import "../../utils/stringextensions";
import {QuizLevel} from "./quizlevel";
import {QuizValidator} from "./quizvalidator";

//TODO: Answer with observer
export class SimpleStringQuizer implements Quizer {

    static readonly WILDCARD = '#';
    quiz: string;
    card: Card;
    renderer: any;
    replacements: number;
    wildcardsCount: number;
    private quizValidator: QuizValidator;

    public constructor(card: Card, complexityLevel: number, renderer: any) {
        this.card = card;
        this.renderer = renderer;
        this.quiz = this.card.back;
        let quizLevel = new QuizLevel(this.quiz, complexityLevel);
        this.quizValidator = new QuizValidator(this.quiz);
        this.replacements = quizLevel.getReplacements();
    }

    retrieveQuiz(): string {
        this.wildcardsCount = 0;
        while (this.notEnoughtWildCards()) {
            this.replaceRandomCharWithWildcard();
        }
        return this.quiz;
    }

    private notEnoughtWildCards(): boolean {
        return this.wildcardsCount < this.replacements;
    }

    private replaceRandomCharWithWildcard(): void {
        let randomCharPos = this.quiz.randomCharIndex();
        if (this.characterIsNotWildcard(randomCharPos)) {
            this.quiz = this.quiz.replaceCharAt(randomCharPos, SimpleStringQuizer.WILDCARD);
            this.wildcardsCount++;
        }
    }

    private  characterIsNotWildcard(randomCharPos: number): boolean {
        return this.quiz[randomCharPos] != SimpleStringQuizer.WILDCARD
    }

    rateAnswer(answer:string): number {
       return this.quizValidator.validate(answer);
    }

    render(): void {
        throw new Error("Method not implemented.");
    }

}