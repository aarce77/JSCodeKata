class TwoCharacters {

    constructor(str) {
        this.s =  this.removeRepeatingCharacters(str);
    }

    removeRepeatingCharacters(str) {
        while(/(\w)\1+/ig.test(str)) {
            var result = /(\w)\1+/ig.exec(str);
            if(result.length) {
                var letter = result[0].slice(0,1);
                str = str.replace(new RegExp(letter, 'g'),"");
            }
        }
        return str;
    }

    findMax() {
        var str = this.s;
        if(str.length === 0) { return 0; }

        var arry = str.split("").sort();
        var dic = {};

        for (var idx = 0; idx < arry.length; idx++) {
            var letter = arry[idx];

            if(dic[letter]) {
                dic[letter]++;
            } else {
                dic[letter] = 1;
            }
        }

        var letters = Object.keys(dic).map(function(key) {
            return [key, dic[key]];
        });

        // Sort the array based on the second element
        letters.sort(function(first, second) {
            return second[1] - first[1];
        });

        var match = "";
        var max = 0;
        while(letters.length > 0) {
            var let1 = letters.shift()[0];
            //add another loop to try each letter for a match.
            for (var idx = 0; idx < letters.length; idx++) {                
                var let2 = letters[idx][0];

                if(!let1 || !let2) {
                    match = "";
                    continue; 
                }

                var exp = `[^(${let1}|${let2})]`;
                match = str.replace(new RegExp(exp, "g"),"");
                match = this.removeRepeatingCharacters(match);

                if(match.length > max) { 
                    max = match.length;
                }
            }
        }

        return max;
    }
}