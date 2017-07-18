///https://www.hackerrank.com/challenges/angry-children/problem
class MaxMin {
    constructor(input) {
        this.MinimumUnfairness = -1;
        let data = input.split("\n").map(Number);
        let n = data.shift();
        let k = data.shift();

        data = data.sort(function(a,b){ return a-b; });

        this.FindMinUnfairness(k, data);
    }

    FindMinUnfairness(setSize, data) {
        for (let idx = 0; idx < data.length; idx++) {
            if(idx + setSize > data.length) { break; }
            let min = data[idx + (setSize-1)] - data[idx];
            
            if(min < this.MinimumUnfairness || this.MinimumUnfairness === -1) {
                this.MinimumUnfairness = min;
                continue;
            }
        }
    }
}