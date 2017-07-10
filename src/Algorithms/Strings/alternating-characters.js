/// https://www.hackerrank.com/challenges/alternating-characters
class AlternatingCharacters {
    constructor(input) {
        this.charactersRemoved = 0;
        this.originalLength = input.length;
        this.RemoveRepeatingCharacters(input);
    }

    RemoveRepeatingCharacters(str) {
        while(/(\w)\1+/ig.test(str)) {
            var result = /(\w)\1+/ig.exec(str);
            if(result.length) {
                str = str.replace(new RegExp(result[0], 'g'), result[1]);
            }
        }
        this.charactersRemoved = this.originalLength - str.length;
    }

    GetCharactersRemoved() {
        return this.charactersRemoved;
    }
}