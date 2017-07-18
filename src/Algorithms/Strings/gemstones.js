///https://www.hackerrank.com/challenges/gem-stones
class Gemstones {
    constructor(arry) {
        this.arry = arry;
        this.dic = new Map();
        this.CommonGemCount = 0;

        this.CommonGems();
    }

    CommonGems() {

        for (let idx = 0; idx < this.arry.length; idx++) {
            let gemColl = this.arry[idx].split("");
            let map = new Map();
            for (var g = 0; g < gemColl.length; g++) {

                let gem = gemColl[g];

                if(!map.has(gem)) {
                    let c = this.dic.get(gem) ? this.dic.get(gem)+1 : 1;
                    this.dic.set(gem, c);
                    map.set(gem,1);
                }
            }
        }
        
        this.dic.forEach((v,k) => {
            if(v === this.arry.length) {
                this.CommonGemCount++;
            }
        });
    }
}