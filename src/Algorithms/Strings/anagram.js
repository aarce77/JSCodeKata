// determines if the two strings are a valid anagram
class Anagram {
    constructor(string1, string2) {
        this.string1 = string1;
        this.string2 = string2;
    }

    IsValid() {
        if(this.string1.length != this.string2.length) {
            return false;
        }

        var arry1 = this.string1.split("").sort();
        var arry2 = this.string2.split("").sort();
        var half = Math.ceil(arry1.length/2);
        
        for (var idx = 0; idx < half; idx++) {
            var first = arry2[idx];
            if(first !== arry1[idx]) {
                return false;
            }
            var last = arry2[(arry2.length-1)-idx];
            if(last != arry1[(arry1.length-1)-idx]) {
                return false;
            }
        }

        return true;
    }
}