class ExtraLongFactorials {
    constructor(num) {
        this.Number = num;
    }

    CalculateFactorial() {
        let BigInteger = require("bignumber.js");
        let bigNum = new BigInteger(1);

        for (var i = 1; i <= this.Number; i++) {
            bigNum = bigNum.mul(i);
        }

        return bigNum.toFixed();
    }
}