/// Balanced Brackets
/// https://www.hackerrank.com/challenges/balanced-brackets/problem

class BalancedBrackets {
    constructor(input) {
        this.input = input;
    }

    Solve() {
        let s = this.input;
        return this.IsBalanced(s);
    }

    IsBalanced(s) {
        let stack = [];
        for(let i=0; i<s.length; i++) {
            if(stack.length === 0) {
                stack.push(s[i]);
            } else {
                if(this.GetClosingBracket(stack[stack.length-1]) ===  s[i]) {
                    stack.pop();
                } else {
                    stack.push(s[i]);
                }
            }
        }

        return stack.length === 0;
    }
    
    GetClosingBracket(b) {
        switch (b) {
            case '{': return '}';
            case '(': return ')';
            case '[': return ']';
            default: return '';
        }
    }
}