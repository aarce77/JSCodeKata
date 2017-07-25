/// https://www.hackerrank.com/challenges/beautiful-binary-string/problem
class BeautifulBinaryString {
    constructor(n, B) {
        this.Initialize(n, B);
        this.Solve();
    }

    Solve() {
        while(this.binary.indexOf("010") > -1) {
            let idx = this.binary.indexOf("010");
            this.binary = this.binary.replace("010", "011");
            this.Steps++;
        }

        return this.steps;
    }

    Initialize(n, B) {
        this.len = +n;
        this.binary = B;
        this.Steps = 0;
    }
}