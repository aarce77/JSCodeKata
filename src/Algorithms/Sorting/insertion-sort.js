class InsertionSort {
    constructor(input) {
        let data = input.split("\n");
        this.size = +data[0];
        this.arry = data[1].split(" ").map(Number);
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
                if(!b) { break; }
            }
        }
        return this.arry;
    }
}