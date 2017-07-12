///https://www.hackerrank.com/challenges/the-love-letter-mystery

class LoveLetterMystery {
    constructor(input) {
        this.input = input;
    }

    GetOperationCount() {
        var count = 0;
        var chars = this.input.split("");
        var half = chars.length / 2;

        for (var idx = 0; idx < half; idx++) {
            var char1 = chars[idx];
            var char2 = chars[(chars.length-1)-idx];

            if(char1.charCodeAt() !== char2.charCodeAt()) {
                count += Math.abs(char1.charCodeAt() - char2.charCodeAt());
                chars[(chars.length-1)-idx] = char1;
            }
        }

        return count;
    }
}
