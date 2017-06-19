import {LevensteinDistance} from '../../utils/levenstein';

/**
 * Created by alvaro on 6/17/17.
 */
export class QuizValidator {
    public static readonly GOOD = 0.2;
    public static readonly REGULAR = 0.4;
    public static readonly BAD = 1;

    
    private static readonly rates = [QuizValidator.GOOD, QuizValidator.REGULAR, QuizValidator.BAD];
    private static readonly SHORT_WORD = 4;
    
    private levensteinCalculator: LevensteinDistance;
    private original: string;
    private distance = 0;
    private errorRatio = 0;
    
    public constructor(original: string, ignoreCase: boolean = false) {
        this.original = original;
        this.levensteinCalculator = new LevensteinDistance(ignoreCase, 2);
    }
    
    public rate(answer: string): number {
        this.distance = this.levensteinCalculator.distance(this.original, answer);
        this.errorRatio = this.distance / this.original.length;
        return this.rateAnswer();
    }

    private rateAnswer(): number {
        if (this.madeMistakeInShortWord()) {
            return QuizValidator.BAD;
        }
        return this.calculateRate();
    }

    private calculateRate():number{
        let i = 0;
        while (this.errorIsNotWithinRate(QuizValidator.rates[i])) {
            i++;
        }
        return QuizValidator.rates[i] ;
    }

    private errorIsNotWithinRate(rate:number):boolean{
        return this.errorRatio -  rate > 0;
    }

    private madeMistakeInShortWord():boolean{
        return this.distance >= 1 && this.original.length <= QuizValidator.SHORT_WORD;
    }
}