
    
    interface String {
        countOccurrences(toFind: string): number;
        replaceCharAt(index:number, replacement:string): string;
        randomCharIndex():number;
        isEmpty():boolean;
        contains(toFind: string): boolean;
    }
    
    if (!String.prototype.isEmpty) {
        String.prototype.isEmpty = function() : boolean{
            return this == null || this.length == 0;
        }
    }

    if (!String.prototype.contains) {
        String.prototype.contains = function(toFind: string) : boolean{
            return this.indexOf(toFind) !== -1;
        }
    }

    if (!String.prototype.randomCharIndex) {
        String.prototype.randomCharIndex = function() : number{
            let max = this.length - 1;
            let min = 0;
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }

    if (!String.prototype.replaceCharAt) {
        String.prototype.replaceCharAt = function(index:number, replacement:string) : string{
            return this.substr(0, index) + replacement + this.substr(index + replacement.length);
        }
    }

    if (!String.prototype.countOccurrences) {
        String.prototype.countOccurrences = function(toFind: string): number{
            return (this.split(toFind).length - 1);
        }
    }

    


    



