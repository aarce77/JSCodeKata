class ACM_ICPC_Team {
    constructor(data) {
        this.Max = 0;
        this.Teams = 0;
        this.Solve(data);
    }

    Solve(topics) {
        let map = new Map();
        for(let i=0; i<topics.length-1; i++) {
            let p1 = topics[i];

            for(let j=(i+1); j<topics.length; j++) {
                let p2 = topics[j];
                let max = this.FindMax(p1,p2);

                let val=0;
                if(map.has(max)) { val = map.get(max); }
                map.set(max,val+1);
            }
        }

        for(let item of map) {
            if(item[0] > this.Max) {
                this.Max = item[0];
                this.Teams = item[1];
            }
        }
        //console.log(this.Max);
        //console.log(this.Teams);
    }

    FindMax(p1,p2) {
        let max = 0;
        for(let i=0; i<p1.length; i++) {
            max += (p1[i]|p2[i]);
        }
        return max;
    }
}