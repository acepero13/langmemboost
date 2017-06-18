import {Card} from "../../card/card";
export interface Quizer {
    card: Card;
    renderer: any;
    replacements: number;
    quiz: string;
    retrieveQuiz(): string;
    rateAnswer(answer:string): number;
    render(): void;
}