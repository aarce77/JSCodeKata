/// https://www.hackerrank.com/challenges/closest-numbers/problem
class ClosestNumbers {
    constructor(input) {
        this.input = input;
        this.arry = [];
        this.size = 0;
        this.closestNumbers = [];
        this.minDiff = null;
        this.Init();
    }

    Init() {
        let data = this.input.split("\n");
        this.size = +data.shift();
        this.arry = data.shift().split(" ").map(Number);
        this.arry = this.arry.sort((a,b) => { return a-b; });
    }

    Solve() {
        for(let idx=0; idx<this.arry.length-1; idx++) {
            if(this.minDiff === null) {
                this.minDiff = this.arry[idx+1] - this.arry[idx];
                this.closestNumbers.push(this.arry[idx]);
                this.closestNumbers.push(this.arry[idx+1]);
                continue;
            }

            if(this.arry[idx+1] - this.arry[idx] < this.minDiff) {
                this.closestNumbers = [];
                this.minDiff = this.arry[idx+1] - this.arry[idx];
                this.closestNumbers.push(this.arry[idx]);
                this.closestNumbers.push(this.arry[idx+1]);
                continue;
            }

            if(this.arry[idx+1] - this.arry[idx] === this.minDiff) {
                this.closestNumbers.push(this.arry[idx]);
                this.closestNumbers.push(this.arry[idx+1]);
            }
        }

        return this.closestNumbers;
    }
}