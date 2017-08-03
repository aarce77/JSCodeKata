class QuickSort3 {
    constructor(input) {
        this.input = input;
    }

    Init() {
        let data = this.input.split("\n");
        this.size = +data.shift();
        this.arry = data.shift().split(" ").map(Number);
        this.Sort(this.arry);
    }

    Sort(arry) {
        let low = 0, high = arry.length-1;
        return this.qSort(arry, low, high);
    }

    qSort(arry, low, high) {
        if(low < high) {
 
            let pIdx = this.Partition(arry, low, high);

            this.qSort(arry, low, pIdx-1); // left side
            this.qSort(arry, pIdx+1, high); // right side
        }
        return arry;
    }

    Partition(arry, low, high) {
        let i = low-1;
        let pivot = arry[high];
        
        for (var j=low; j <= high; j++) {
            if(arry[j] < pivot) {
                i++;
                this.Swap(arry, j, i);
            }
        }

        // swap the pivot 
        this.Swap(arry, i+1, high);
        //console.log(arry.join(" "));
        return i+1;
    }

    Swap(arry, idx1, idx2) {
        let temp = arry[idx1];
        arry[idx1] = arry[idx2];
        arry[idx2] = temp;
    }

    Solve() {
        this.Init();
        return this.arry;
    }
}