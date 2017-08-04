/// https://www.hackerrank.com/challenges/countingsort4/problem
class TheFullCountingSort {
    constructor(input) {
        this.input = input;
    }

    Solve() {
        let data = this.input.split("\n");
        let size = +data.shift();
        let dic = [];

        for(var i=0; i<data.length; i++) {
            let d = data[i].split(" ");
            let n = +d[0];
            let str = (i < size/2) ? "-" : d[1];
            let obj = this.GetKeyValuePair(n, str);
            
            if(!dic[n]) {
                dic[n] = [obj];
            } else {
                dic[n].push(obj);
            }
        }

        let sorted = [];
        for(let c=0; c<dic.length; c++) {
            if(!dic[c]) { return; }
            let objs = dic[c];
            
            for(let j=0; j<objs.length; j++) {
                sorted.push(objs[j].value);
            }
            
        }
        return sorted.join(" ");
    }

    GetKeyValuePair(k,v) {
        return {key:k, value:v};
    }
}
