
import { Card } from "../../card/card";
export interface Quizer {
    card: Card;
    renderer: any;
    complexityLevel: number;
    answer: string;
    quiz: string;
    retrieveQuiz(): string;
    validateQuiz():number;
    rateAnswer(): number;
}