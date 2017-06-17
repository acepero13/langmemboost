export class LevensteinDistance {

    private costMatrix: number[][];
    private str: string;
    private against: string;
    private defaultSubstitutionCost: number;
    private ignoreCase: boolean;

    public constructor(ignoreCase: boolean = false, defaultSubstitutionCost: number = 1) {
        this.costMatrix = [];
        this.defaultSubstitutionCost = defaultSubstitutionCost;
        this.ignoreCase = ignoreCase;
    }

    public distance(str: string, against: string): number {
        if (str.isEmpty())
            return against.length;
        if (against.isEmpty())
            return str.length;

        this.setStringsToCompare(str, against);
        this.initializeCostMatrix();
        this.computeCostMatrix();
        return this.getDistance();
    }

    private setStringsToCompare(str: string, against: string) {
        if (this.ignoreCase) {
            this.str = str.toLowerCase();
            this.against = against.toLowerCase();
        } else {
            this.str = str;
            this.against = against;
        }
    }

    private initializeCostMatrix(): void {
        for (let strIndex = 0; strIndex <= this.str.length; strIndex++) {
            this.costMatrix[strIndex] = [];
            this.costMatrix[strIndex][0] = strIndex;
        }
        for (let againstIndex = 0; againstIndex <= this.against.length; againstIndex++) {
            this.costMatrix[0][againstIndex] = againstIndex;
        }
    }

    private computeCostMatrix(): void {
        for (let strIndex = 1; strIndex <= this.str.length; strIndex++) {
            for (let againstIndex = 1; againstIndex <= this.against.length; againstIndex++) {
                this.updateCostMatrix(strIndex, againstIndex);
            }
        }
    }

    private getDistance(): number {
        return this.costMatrix[this.str.length][this.against.length];
    }

    private  computeSubstitutionCost(strIndex: number, againstIndex: number): number {
        return (this.str[strIndex] == this.against[againstIndex]) ? 0 : this.defaultSubstitutionCost;
    }

    private updateCostMatrix(strIndex: number, againstIndex: number): void {
        this.costMatrix[strIndex][againstIndex] =
            Math.min(
                this.getDeletionCost(strIndex, againstIndex),
                this.getInsertionCost(strIndex, againstIndex),
                this.getSubstitutionCost(strIndex, againstIndex)
            );
    }

    private getDeletionCost(strIndex: number, againstIndex: number): number {
        return this.costMatrix[strIndex - 1][againstIndex] + 1
    }

    private getInsertionCost(strIndex: number, againstIndex: number): number {
        return this.costMatrix[strIndex][againstIndex - 1] + 1;
    }

    private getSubstitutionCost(strIndex: number, againstIndex: number): number {
        let substitutionCost = this.computeSubstitutionCost(strIndex, againstIndex);
        return this.costMatrix[strIndex - 1][againstIndex - 1] + substitutionCost;
    }
}