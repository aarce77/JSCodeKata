/// https://www.hackerrank.com/challenges/mark-and-toys/problem
class MarkAndToys {
    constructor(input) {
        this.input = input;
    }

    Solve() {
        let data = this.input.split("\n");
        let nk = data.shift().split(" ");
        let arry = data.shift().split(" ").map(Number);
        let max = 0;
        let count = 0;
        arry = arry.sort((a,b) => { return a-b; });

        for(let idx=0; idx<arry.length; idx++) {
            if(max+arry[idx] <= nk[1]) {
                max = max += arry[idx];
                count++;
                continue;
            }
            break;
        }

        return count;
    }
}