/// https://www.hackerrank.com/challenges/separate-the-numbers
class SeparateNumbers {
    constructor(input) {
        this.input = input;
    }

    GetNumbers() {
        let sb = "";
        let arry = [];
        let valid = false;

        for (let idx = 1; idx < this.input.length; idx++) {
            let num = parseInt(this.input.substring(0,idx));

            sb = num.toString();
            arry = [sb];

            while(sb.length < this.input.length) {
                let str = (num+1).toString();
                sb = sb + str;
                arry.push(str);
                if(!this.input.startsWith(sb)) {
                    valid = false;
                    break;
                }
                num = ++num;
            }

            if(sb.length === this.input.length && this.input.startsWith(sb)) {
                valid = true;
                break;
            }
        }

        return valid ? arry : [];
    }

    ReportBeautifulSeqeunce() {
        let arry = this.GetNumbers();

        return arry.length === 0 ? "NO" : `YES ${arry[0]}`;
    }
}
