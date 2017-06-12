
describe('Algorithmic Crush', () => {
var sampleTestData = `5 3
1 2 100
2 5 100
3 4 100`
    it('Sample Test Case', () => {
        var aCrush = new AlgorithmicCrush(sampleTestData);

        expect(aCrush.MaximumValue).toBe(200);
    });
});
    