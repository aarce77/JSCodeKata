class WeightedUniformStrings {
    constructor(characters) {
        this.Characters = characters;   
    }

    CalculateWeights() {
        let results = {};
        let letters = this.Characters;

        while(letters.length > 0) {
            let result = /(\w)\1+/ig.exec(letters);
            let charVal = 0;

            if(result !== null && result.index === 0) {
                for (let i = 0; i < result[0].length; i++) {
                    charVal = ((result[1].charCodeAt() - 96) * (i+1));
                    results[charVal+""] = charVal;
                }
                letters = letters.slice(result[0].length);
            } else {
                charVal = (letters[0].charCodeAt() - 96);
                results[charVal+""] = charVal;
                letters = letters.slice(1);
            }
        }

        return results;
    }
}
