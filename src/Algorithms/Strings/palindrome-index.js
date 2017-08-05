/// https://www.hackerrank.com/challenges/palindrome-index/problem
class PalindromeIndex {
    constructor(input) {
        this.input = input;
    }

    Solve() {
        let str = this.input;
        if(str === str.split("").reverse().join("")) { return -1; }

        let end = (str.length-1);

        for (let idx = 0; idx < str.length; idx++) {

            if(str[idx] !== str[end-idx]) { 
                // see if removing the character from the front makes it a palindrome
                let newStr = str.substring(0,idx) + str.substring(idx+1, str.length);
                let rev = newStr.split("").reverse().join("");

                if(newStr === rev) { return idx; }

                // see if removing the character from the back makes it a palindrome
                let endIdx = (end-idx);
                newStr = str.substring(0, endIdx) + str.substring(endIdx+1, str.length);
                rev = newStr.split("").reverse().join("");

                if(newStr === rev) { return endIdx; }
            }
        }
        return -1;
    }
}

let index = new PalindromeIndex("aaab").Solve();
console.log(index);