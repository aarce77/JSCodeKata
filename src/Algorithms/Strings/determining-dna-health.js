class DnaHealth {
    constructor(genes, health) {
        this.genes = genes;// ["a","b","c","aa","d","b"];
        this.health = health; // [1, 2, 3, 4, 5, 6,];

        this.Min = null;
        this.Max = null;
    }

    Solve(first,last,str) {
        let sum = 0;

        while(first <= last) {
            let g = this.genes[first];
            let h = this.health[first];
            sum += this.CalcHealth(g,h,str);
            first++;

            if(first > last) { break; }

            g = this.genes[last];
            h = this.health[last];
            sum += this.CalcHealth(g,h,str);
            last--;
        }
        
        if(sum < this.Min || this.Min === null) { this.Min = sum; }
        if(sum > this.Max || this.Max === null) { this.Max = sum; }

        return sum;
    }

    CalcHealth(g,h,str) {
        let sIdx = 0;
        let sum = 0;
        while(str.indexOf(g,sIdx) > -1) {
            sIdx = str.indexOf(g,sIdx)+1;
            sum += h;
        }
        return sum;
    }
}

var dh = new DnaHealth(["a","b","c","aa","d","b"],[1, 2, 3, 4, 5, 6,]);
console.log(dh.Solve(1,5,"caaab"));
console.log(dh.Solve(0,4,"xyz"));
console.log(dh.Solve(2,4,"bcdybc"));

console.log(dh.Min + " " + dh.Max);