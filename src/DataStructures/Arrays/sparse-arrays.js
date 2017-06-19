class SparseArrays
{
    constructor(input) {
        this.Sparse = this.processData(input);
    }

    processData(input) {
        var lines = input.split('\n');
        
        var wordCount = +lines.shift();
        var dic = [];
        
        for (var c = 0; c < wordCount; c++) {
            var ln = lines.shift();
            dic[ln] = dic[ln] !== undefined ? ++dic[ln] : 1; 
        }

        var lookupCount = +lines.shift();
        var result = [];
        
        for (var i = 0; i < lookupCount; i++) {
            ln = lines.shift();
            result.push(dic[ln] ? dic[ln] : 0);
            //console.log(dic[ln] ? dic[ln] : 0);
        }

        return result;
    } 
}