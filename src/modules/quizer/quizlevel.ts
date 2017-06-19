export class QuizLevel {

    static readonly SUPER_EASY = 0.3;
    static readonly EASY = 0.5;
    static readonly DIFFICULT = 0.8;
    static readonly SUPER_DIFFICULT = 0.9;

    private replacementPercentage: number;

    private text: string;

    public constructor(text: string, complexityLevel: number) {
        this.replacementPercentage = complexityLevel;
        this.text = text.trim();
    }

    public getReplacements(): number {
        return this.replacementCalculator();
    }

    private replacementCalculator(): number {
        let wordLength = this.text.length;
        let replacements = Math.floor(wordLength * this.replacementPercentage);
        return (replacements <= 0) ? 1 : replacements;
    }
}