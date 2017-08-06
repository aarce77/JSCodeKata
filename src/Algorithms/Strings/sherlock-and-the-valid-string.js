/// Sherlock and the Valid String
/// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
class SherlockValidString {
    constructor(input) {
        this.input = input;
    }

    Solve() {
        let dic = {};
        let s = this.input;

        for(let i=0; i<s.length; i++) {
            if(!dic[s[i]]) {
                dic[s[i]] = 1;
            } else {
                dic[s[i]]++;
            }
        }
        return this.IsValid(dic);
    }

    GetValuesGrouped(dic) {
        let vals = {};
        for (let key in dic) {
            if (dic.hasOwnProperty(key)) {
                let val = dic[key];
                if(!vals[val]) { vals[val]=1; } 
                else { vals[val]++; }
            }
        }
        return vals;
    }

    IsValid(dic) {
        let vals = this.GetValuesGrouped(dic);
        let calcs = [];
        for (let key in vals) {
            if (vals.hasOwnProperty(key)) {
                let val = vals[key];
                calcs.push(val);
            }
        }
        calcs = calcs.sort((a,b) => { return b-a; });

        if(calcs.length === 1) { return "YES"; };

        if(calcs.length > 2) { return "NO"; }

        if(calcs[1] > 1) { return "NO"; }

        return "YES";
    }
}