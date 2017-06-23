class MissingNumbers {
    constructor(input) {
        this.Input = input;
    }

    GetMissingNumbers() {
        let data = this.Input.split("\n");
        this.ListA = data[1].split(' ');
        this.ListB = data[3].split(' ');
        let dataSet = {};
        let results = [];

        for (let idx = 0; idx < this.ListB.length; idx++) {
            dataSet[this.ListB[idx]] = !dataSet[this.ListB[idx]] ? 1 : dataSet[this.ListB[idx]]+=1;
        }

        for (let idx = 0; idx < this.ListA.length; idx++) {
            dataSet[this.ListA[idx]]-=1;
        }

        for (var key in dataSet) {
            if (dataSet.hasOwnProperty(key)) {
                if(dataSet[key] > 0) {
                    results.push(key);
                }
            }
        }
        return results;
    }
}