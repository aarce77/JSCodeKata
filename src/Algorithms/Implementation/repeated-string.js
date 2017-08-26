/// https://www.hackerrank.com/challenges/repeated-string/problem
/// Repeated String
class RepeatedString {
    constructor() { }

    Solve(n, s) {
        let cnt = this.GetMatches(s);
        let len = s.length;

        if(n%len === 0) { return cnt * (n/s.length); }

        let rpts = Math.floor(n/len);
        let mis = Math.abs((rpts*len)-n);

        return (cnt * rpts) + this.GetMatches(s.substr(0,mis));
    }

    GetMatches(str) {
        let m = str.match(/a/g);
        return m ? m.length : 0;
    }
}