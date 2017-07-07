class Fibonacci {
    constructor(count) {
        this.count = count;
    }

    GetSequence() {
        var coll = [1];

        if(this.count === 0) { return []; }
        if(this.count === 1) { return coll; }

        var n1 = 0, n2 = 1;

        do {
            coll.push(n2);
            n1 = coll[coll.length-2];
            n2 = n1+n2;
        } while (coll.length < this.count);

        return coll;
    }
}