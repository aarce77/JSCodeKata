class AlgorithmicCrush
{
    constructor(input) {
        this.MaximumValue = this.processData(input);
    }

    processData(input) {
        var lines = input.split('\n');
        
        var cnt = lines.shift().split(" ").map(Number);
        
        var lineCount = cnt[1];
        var arry = Array(cnt[0]).fill(0);
        var max = 0, added = 0;
        
        for(var i = 0; i < lines.length; i++) {
            var list = lines[i].split(" ");
            
            var idx1 = +list[0] - 1;
            var idx2 = +list[1] - 1;
            var val = +list[2];

            arry[idx1] += val;
            if(idx2+1 <= cnt[0]) {
                arry[idx2+1] -= val;
            }
        }

        for (var index = 0; index < arry.length; index++) {
            added += arry[index];
            if(max < added){ 
                max = added;
            }
        }

        return max;
    } 
}