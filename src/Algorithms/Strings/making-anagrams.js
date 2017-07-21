/// https://www.hackerrank.com/challenges/making-anagrams
class MakingAnagram {
    constructor(str1, str2) {
        this.str1 = str1;
        this.str2 = str2;

        this.DeletedCharacterCount = this.CalculateDeletions();
    }

    CalculateDeletions() {
        let size = this.str1.length;
        if(this.str2.length < size) { size = this.str2.length; }

        let arry1 = new Array(26).fill(0); // this.str1.split("");
        let arry2 = new Array(26).fill(0); // this.str2.split("");

        for (let i = 0; i < this.str1.length; i++) {            
            arry1[this.str1.charCodeAt(i)-97]++;
        }

        for (let i = 0; i < this.str2.length; i++) {            
            arry2[this.str2.charCodeAt(i)-97]++;
        }

        let count = 0;
        for (var idx = 0; idx < arry1.length; idx++) {
            count += Math.abs(arry1[idx] - arry2[idx]);
        }

        return count;
    }

    GetDeletedCharacterCount() {
        return this.DeletedCharacterCount;
    }
}