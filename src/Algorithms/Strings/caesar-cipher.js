class CaesarCipher {
    constructor(input) {
        this.lowerCaseMin = "a".charCodeAt(0);
        this.lowerCaseMax = "z".charCodeAt(0);

        this.upperCaseMin = "A".charCodeAt(0);
        this.upperCaseMax = "Z".charCodeAt(0);

        this.data = input.split("\n");
    }

    encrypt() {
        let words = this.data[1].split(""); 
        let steps = +this.data[2];

        for (var idx = 0; idx < words.length; idx++) {
            let letter = words[idx];
            let regEx = new RegExp(/[A-Z]|[a-z]/g);

            if(!regEx.test(letter)) { continue; }

            let code = letter.charCodeAt(0);
            let min = this.upperCaseMin, max = this.upperCaseMax;

            if(code >= this.lowerCaseMin && code <= this.lowerCaseMax) {
                min = this.lowerCaseMin;
                max = this.lowerCaseMax;
            }
            if(((steps + code) - max) > 0) { // circle back around
                if(steps > (max-min)) {
                    let range = (max-min)+1;
                    let tSteps = ((steps + code) - max)

                    while(tSteps > range) { tSteps -= range; }
                    words[idx] = String.fromCharCode(tSteps+(min-1));

                } else {
                    words[idx] = String.fromCharCode(((steps + code) - max) + (min - 1));
                }
            }
            else {
                words[idx] = String.fromCharCode(steps + code);
            }
        }
        return words.join("");
    }
}