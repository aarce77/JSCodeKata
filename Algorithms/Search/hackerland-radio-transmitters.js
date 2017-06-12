class HackerlandRadioTransmitters
{
    constructor(input1, input2) {
        this.radios = [];
        this.range = 0;
        this.houses = 0;
        this.MinimunRadiosNeeded = this.processData(input1, input2);
    }

    processData(input1, input2) {
        var n_temp = input1.split(' ');
        this.houses = parseInt(n_temp[0]);
        this.range = parseInt(n_temp[1]);

        var x = input2.split(' ');
        x = x.map(Number).sort(function(a,b) {
            return a-b;
        });

        while(x.length > 0)
        {
            // find the house that is out of range and go one house back
            // and place a radio there, if the house already has a radio, 
            // then the house that is out of range needs the radio.
            var dist = (x[0] + this.range);
            var idx;

            for (var i = 0; i < x.length; i++) {
                if(x[i] <= dist) { idx = i }
                else { break; }
            }
            x = this.removeHouses(idx, x);

            if(x.length == 1) { // its the last one
                this.radios.push(x.shift());
            }
        }

        return this.radios.length;
    }

    removeHouses(idx, arry) {
        if(idx == -1) { return arry; }
        var loc = arry[idx];
        this.radios.push(loc);
        //remove all houses that are covered by the range of the radio
        arry = arry.splice(idx);
        while((arry[0] - (loc + this.range)) <= 0) { arry.shift(); }

        return arry;
    }
}