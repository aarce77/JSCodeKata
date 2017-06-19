
describe('Sparse Arrays', () => {
var sampleTestData = `4
aba
baba
aba
xzxb
3
aba
xzxb
ab`
    it('Sample Test Case', () => {
        var results = new SparseArrays(sampleTestData).Sparse;

        expect(results.length).toBe(3);
        expect(results[0]).toBe(2);
        expect(results[1]).toBe(1);
        expect(results[2]).toBe(0);
    });
        
});
    