class SuperReducedString {
    constructor(str) {
        this.s = str;
    }

    reduceString() {
        while(/(\w)\1+/g.test(this.s)) {
            this.s = this.s.replace(/(\w)\1/g, "");
        }
        
        if(!this.s) {
            return "Empty String";
        } else {
            return this.s;
        }
    }
}