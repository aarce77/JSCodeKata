class Pairs {
    constructor(input) {
        let data = input.split('\n');
        this.diff = +data[0].split(' ')[1];
        this.list = data[1].split(' ').map(Number);
        this.list = this.list.sort((a,b) => { return a-b; });
    }

    GetPairsCount() {
        let counter = 0;
        for (let idx1 = 0; idx1 < this.list.length; idx1++) {
            let n = this.list[idx1];
            let idx2 = idx1;

            while(idx2 < this.list.length) {
                if(Math.abs(n-this.list[idx2])===this.diff) { 
                    counter++; 
                    break;
                }
                idx2++;
            }
        }
        return counter;
    }
}
