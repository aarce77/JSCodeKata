/// Sherlock and Array
/// https://www.hackerrank.com/challenges/sherlock-and-array

class SherlockArray {
    constructor(data) {
        this.data = data;
    }

    solve() {
        if(this.data.length === 1) { return true; }
        if(this.data.length === 3 && this.data[0] === this.data[2]) {
            return true;
        }
        
        let l = 0;
        let r = 0;
        let curVal = 0;
        
        for (let idx = 0; idx < this.data.length; idx++) {
            l = l + this.data[idx];
        }
        
        for (let idx = 1; idx < this.data.length; idx++) {
          
          r = r + this.data[idx-1];
          l = l - this.data[idx-1];
          curVal = this.data[idx];
          
          if(r === Math.abs(l-curVal)) { return true; }
        }
      
        return false;
    }
}

//var sherlock = new SherlockArray([ 1, 2, 3, 3 ]);
//var sherlock = new SherlockArray([ 1 ]);
var sherlock = new SherlockArray([75,26,45,72,81,47,29,97,2,75,25,82,84,17,56,32,2,28,37,57,39,18,11,79,6,40,68,68,16,40,63,93,49,91,10,55,68,31,80,57,18,34,28,76,55,21,80,22,45,11,67,67,74,91,4,35,34,65,80,21,95,1,52,25,31,2,53,96,22,89,99,7,66,32,2,68,33,75,92,84,10,94,28,54,12,9,80,43,21,51,92,20,97,7,25,67,17,38,100,86]);
var sherlock = new SherlockArray([185,170,208,216,236,155,88,206,211,209,84,99,130,245,232,125,127,232,187,140,92,213,221,231,129,197,221,168,95,186,136,180,94,125,150,244,249,248,140,207,125,84,123,85,100,175,67,116,107,143,158,75,165,172,115,134,175,123,115,123,159,181,63,176,158,109,67,154,126,141,111,95,138,161,71,118,151,189,126,109,194,176,159,151,189,71,95,133,154,157,109,78,101,174,169,152,94,193,176,137]);
console.log(sherlock.solve())