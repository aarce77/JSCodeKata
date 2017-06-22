class GridlandMetro
{
    constructor(input) {
        this.BigInteger = require("bignumber.js");
        this.totalCells = new this.BigInteger(0);
        this.consumedCells = new this.BigInteger(0);
        //this.totalCells = 0;
        //this.consumedCells = 0;
        this.AvailableCells = this.processData(input);
    }

    processData(input) {
        var data = input.split("\n");
        var gs = data.shift().split(" ").map(Number);

        //this.totalCells = (gs[0] * gs[1]);
        this.totalCells = new this.BigInteger(gs[0]).mul(gs[1]);

        var dic = this.groupByRow(data, data.length);
        this.merge(dic);

        return this.totalCells.minus(this.consumedCells.toFixed());
    }

    merge(dic) {
        /// sort each item in dictionary and merge any overlapping
        /// if the item is able to merge, remove it from the array
        for (var idx in dic) {
            var ranges = dic[idx].sort((a,b) => { return a[0]-b[0];});
            var currentRange = ranges.shift();
            var mergedRanges = [];
            var merged = true;

            var sum = 0;
            while(ranges.length > 0) {
                merged = false;
                var item = ranges.shift();

                if(currentRange[0] <= item[0] && currentRange[1] >= item[1]) {
                    merged = true;
                    continue;
                }

                if(currentRange[0] >= item[0]) {
                    currentRange[0] = item[0];
                    merged = true;
                }
                if(currentRange[1] <= item[1] && currentRange[1] >= item[0]) {
                    currentRange[1] = item[1];
                    merged = true;
                }

                if(!merged) {
                    sum += (currentRange[1]-currentRange[0])+1;
                    //this.consumedCells += ((currentRange[1]-currentRange[0])+1);
                    this.consumedCells = this.consumedCells.plus((currentRange[1]-currentRange[0])+1);
                    mergedRanges.push(currentRange);
                    currentRange = item;
                }
            }

            // do something with the last one
            //this.consumedCells += ((currentRange[1]-currentRange[0])+1);
            this.consumedCells = this.consumedCells.plus((currentRange[1]-currentRange[0])+1);

            mergedRanges.push(currentRange);
            dic[idx] = mergedRanges;
        }
    }

    groupByRow(data, seqs) {
        /// store the sequences in a dictionary type of array and return it
        var dic = [];
        for (var i = 0; i < seqs; i++) {
            var item = data[i].trim().split(" ").map(Number);
            var rowIndex = item[0]-1;
            var row = dic[rowIndex];

            if(!row) {
                // store the min, max and range
                dic[rowIndex] = [[item[1], item[2]]];
                continue;
            }
            row.push([item[1], item[2]]);
        }
        return dic;
    }
}