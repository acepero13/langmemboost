import {Card} from "../../card/card";
export interface Quizer {
    card: Card;
    renderer: any;
    replacements: number;
    quiz: string;
    retrieveQuiz(): string;
    validateQuiz(): number;
    rateAnswer(): number;
    render(): void;
}