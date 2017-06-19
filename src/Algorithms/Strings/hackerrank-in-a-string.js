class HackerRankInAString {
    constructor(chars, word) {
        this.ValidChars = chars.replace(/[^h,a,c,k,e,r,n]/gi,"");
        this.Word = word;
    }

    ContainsWord() {
        let arry = this.Word.split('');
        let validChars = this.ValidChars.toLowerCase().split('');
        let stringBuilder = [];

        for (var idx = 0; idx < arry.length; idx++) {

            let vIdx = this.ValidChars.indexOf(arry[idx]);
            if(vIdx !== -1) {
                stringBuilder.push(this.ValidChars.substr(vIdx,1));
                if(this.ValidChars.length > 0) {
                    this.ValidChars = this.ValidChars.slice(vIdx+1);
                }
            }
            
            if(stringBuilder.length === arry.length) {
                return true;
            }

            if(this.ValidChars.length == 0) {
                return false;
            }
        }

        if(stringBuilder.length === arry.length) {
            console.log(stringBuilder.join(''));
            return true;
        }
    }
}