/// https://www.hackerrank.com/challenges/minimum-loss

class MinimumLoss {
    constructor(input) {
        let data = input.split('\n');
        this.prices = data[1].split(" ").map(Number);
        //this.prices = this.prices.sort((a,b) => a-b );
    }

    findMinLoss() {
        let nums = this.prices.slice().sort((a,b) => a-b );
        let min = nums[1]-nums[0];
        
        for (let idx = 1; idx < nums.length; idx++) {
            if(nums[idx]-nums[idx-1] < min && 
                this.prices.indexOf(nums[idx]) < this.prices.indexOf(nums[idx-1]) ) {
                min = nums[idx]-nums[idx-1];
            }
        }

        return min;
    }
}