class Pangrams {
    constructor(pharse) {
        this.Alphabet = "abcdefghijklmnopqzstuvwxyz".split('');
        this.Pharse = pharse;
    }

    IsPangram() {
        for (var idx = 0; idx < this.Alphabet.length; idx++) {
            let exp = `[${this.Alphabet[idx]}]`;

            if(!new RegExp(exp, "gi").test(this.Pharse)) {
                return false;
            }
        }
        return true;
    }
}