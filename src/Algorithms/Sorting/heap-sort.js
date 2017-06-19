class HeapSort {
    constructor(unsortedArray) {
        this.data = unsortedArray;
        this.tree = new BinaryTree(this.data).getTree();
        this.heap = [];
    }

    sort() {
        this.buildHeap();

        let arry = [];
        while(this.heap.length >= 0) {
            if(this.heap.length === 1) {
                arry.unshift(this.heap.pop());
                break;
            }
            let l = this.heap.pop();
            arry.unshift(this.heap[0]);
            this.heap[0] = l;
            this.shiftDown(0);
        }
        return arry;
    }

    buildHeap() {
        let arry = this.data.slice();
        while (arry.length > 0) {
            this.addToHeap(arry.shift());
        }
        return this.heap;
    }

    addToHeap(val) {
        this.heap.push(val);
        this.shiftUp(this.heap.length-1);
    }

    shiftUp(idx) {
        if(idx === 0) { return; }

        let p = Math.floor((idx-1)/2);

        if(this.heap[p] < this.heap[idx]) {
            let t = this.heap[p];
            this.heap[p] = this.heap[idx];
            this.heap[idx] = t;

            this.shiftUp(p);
        }
    }

    shiftDown(idx) {
        if(idx > this.heap.length) { return; }

        let ch1 = Math.floor((2*idx)+1);
        let ch2 = Math.floor((2*idx)+2);
        let chIdx;
        if(ch2 <= this.heap.length) {
            chIdx = ch2;
            if(this.heap[ch1] > this.heap[ch2]) { chIdx = ch1; }
        } else if(ch1 >= this.heap.length) {
            return;
        } else {
            chIdx = ch1;
        }

        if(this.heap[idx] < this.heap[chIdx]) {
            let t = this.heap[idx];
            this.heap[idx] = this.heap[chIdx];
            this.heap[chIdx] = t;
            this.shiftDown(chIdx);
        }
    }
}