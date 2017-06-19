class MarsExploration {
    constructor(letters) {
        this.NonMatching = 0;
        this.ParseMessage(letters);
    }

    ParseMessage(letters) {
        let regex = /\w{3}/gi;
        let m;
        while ((m = regex.exec(letters)) !== null) {
            // let's avoid an infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            
            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                let l = match.split('');
                if(l[0] !== "S") { this.NonMatching++; }
                if(l[1] !== "O") { this.NonMatching++; }
                if(l[2] !== "S") { this.NonMatching++; }
            });
        }
    }

    GetNonMatchingCount() { 
        return this.NonMatching; 
    }
}

let mars = new MarsExploration("SOS");
console.log(mars.GetNonMatchingCount());