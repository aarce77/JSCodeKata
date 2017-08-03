class QuickSort1 {
    constructor(input) {
        this.input = input;
    }

    Init() {
        let data = this.input.split("\n");
        this.size = +data.shift();
        this.arry = data.shift().split(" ").map(Number);
    }

    Solve() {
        this.Init();
        let left = [];
        let right = [];
        let equal = [];
        let pivot = this.arry[0];
        equal.push(pivot);

        for (let idx = 1; idx < this.arry.length; idx++) {
            let ele = this.arry[idx];
            if(ele < pivot) { left.push(ele); }
            if(ele > pivot) { right.push(ele); }
            if(ele === pivot) { equal.push(ele); }
        }

        return left.concat(pivot, right).join(" ");
    }
}