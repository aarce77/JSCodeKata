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

// var rta = new RunningTimeOfAlgorithms("100\n406 157 415 318 472 46 252 187 364 481 450 90 390 35 452 74 196 312 142 160 143 220 483 392 443 488 79 234 68 150 356 496 69 88 177 12 288 120 222 270 441 422 103 321 65 316 448 331 117 183 184 128 323 141 467 31 172 48 95 359 239 209 398 99 440 171 86 233 293 162 121 61 317 52 54 273 30 226 421 64 204 444 418 275 263 108 10 149 497 20 97 136 139 200 266 238 493 22 17 39");
// rta.Solve();
// console.log(rta.GetShiftCount());