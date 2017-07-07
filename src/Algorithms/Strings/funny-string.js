/// https://www.hackerrank.com/challenges/funny-string
class FunnyString {
    constructor(funnyString) {
        this.funnyString = funnyString;
    }

    IsFunny() {
        let arry1 = this.funnyString.split("");
        let arry2 = arry1.slice().reverse();

        for (let idx = 1; idx < arry1.length; idx++) {
            let num1 = Math.abs(arry1[idx].charCodeAt() - arry1[idx-1].charCodeAt());
            let num2 = Math.abs(arry2[idx].charCodeAt() - arry2[idx-1].charCodeAt());
            if(num1 !== num2) {
                return false;
            }
        }

        return true;
    }
}