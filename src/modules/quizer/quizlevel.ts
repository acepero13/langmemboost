export class QuizLevel {
    static readonly SUPER_EASY = 0.3;
    static readonly EASY = 0.5;
    static readonly DIFFICULT = 0.8;
    static readonly SUPER_DIFFICULT = 0.9;
    private complexityLevel: number;

    private text: string;

    public constructor(text: string, complexityLevel: number) {
        this.complexityLevel = complexityLevel;
        this.text = text.trim();
    }

    public getReplacements(): number {
        return this.replacementCalculator(this.complexityLevel);
    }

    private replacementCalculator(replacementPercentage: number): number {
        let wordLength = this.text.length;
        let replacements = Math.floor(wordLength * replacementPercentage);
        return (replacements <= 0) ? 1 : replacements;
    }
}