class QuickSort2 {
    constructor(input) {
        this.input = input;
        this.sortedArray = [];
    }

    Init() {
        let data = this.input.split("\n");
        this.size = +data.shift();
        this.arry = data.shift().split(" ").map(Number);
    }

    Partition(arry) {
        let left = [];
        let right = [];
        let pivot = arry[0];

        for (let idx = 1; idx < arry.length; idx++) {
            let ele = arry[idx];
            if(ele < pivot) { left.push(ele); }
            if(ele >= pivot) { right.push(ele); }
            //if(ele === pivot) { equal.push(ele); }
        }

        if(left.length > 1) { 
            left = this.Partition(left); }
        if(right.length > 1) { 
            right = this.Partition(right); }

        console.log(left.concat(pivot, right).join(" "));
        return left.concat(pivot, right);
    }

    Solve() {
        this.Init();
        this.sortedArray = this.Partition(this.arry);
    }
}

// var qs = new QuickSort2("7\n5 8 1 3 7 9 2");
// qs.Solve();