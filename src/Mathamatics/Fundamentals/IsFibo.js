class IsFibo {
    constructor(input) {
        this.data = input.split("\n");
        this.PrintFibo();
    }

    PrintFibo() {
        var size = this.data.shift();
        
        for(var idx=0; idx<this.data.length; idx++) 
        {
            var coll = [1];
            var n1 = 0, n2 = 1;
            var num = +this.data[idx];
            if(num === 1) { console.log("IsFibo"); continue; }
            do {
                coll.push(n2);
                n1 = coll[coll.length-2];
                n2 = n1+n2;

                if(n2 === num) { console.log("IsFibo"); break; }
                if(n2 > num) { console.log("IsNotFibo"); break; }
            } while (n2 < num);
        }
    }
}
var fibo = new IsFibo("7\n7337225410\n2601802294\n9193035135\n5270600128\n6806600026\n89\n235762439\n2\n1\n8947212691");
