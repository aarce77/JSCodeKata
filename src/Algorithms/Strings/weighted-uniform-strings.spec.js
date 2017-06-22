
describe('Weighted Uniform Strings', () => {
    
    it('Sample Test Case', () => {
        let wus = new WeightedUniformStrings("abccddde");
        let weights = wus.CalculateWeights();
        let results = "Yes Yes Yes Yes No No".split(' ');

        let data = "1 3 12 5 9 10".split(' ');
        for (var idx = 0; idx < data.length; idx++) {
            let val = data[idx];
            expect(weights[val] ? "Yes" : "No").toBe(results[idx]); 
        }
    });

    // it('Test Case', () => {
    //     let wus = new WeightedUniformStrings("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiih");
    //     let weights = wus.CalculateWeights();
    //     let results = "Yes Yes Yes Yes No No".split(' ');

    //     let data = "1 3 12 5 9 10".split(' ');
    //     for (var idx = 0; idx < data.length; idx++) {
    //         let val = data[idx];
    //         expect(weights[val] ? "Yes" : "No").toBe(results[idx]); 
    //     }
    // }); 
});
    