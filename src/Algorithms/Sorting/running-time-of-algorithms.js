class RunningTimeOfAlgorithms {
    constructor(input) {
        let data = input.split("\n");
        this.size = +data[0];
        this.arry = data[1].split(" ").map(Number);
        this.shifts = 0;
    }

    Solve() {
        for(let a=0; a<this.arry.length-1; a++) {
            let b=(a+1);

            while(true) {
                if(this.arry[b-1] <= this.arry[b]) { break; }

                let temp = this.arry[b];
                this.arry[b] = this.arry[b-1];
                this.arry[b-1] = temp;
                b--;
                this.shifts++;
                if(!b) { break; }
            }
        }
        return this.arry;
    }

    GetShiftCount() { return this.shifts; }
}

// var rt = new RunningTimeOfAlgorithms("5\n2 1 3 1 2");
// rt.Solve();
// console.log(rt.GetShiftCount());