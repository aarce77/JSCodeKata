
describe('Data Structure', () => {
    
    describe('Arrays', () => {
        
        describe('Algorithmic Crush', () => {
            var sampleTestData = `5 3\n1 2 100\n2 5 100\n3 4 100`;
            it('Sample Test Case', () => {
                var aCrush = new AlgorithmicCrush(sampleTestData);

                expect(aCrush.MaximumValue).toBe(200);
            });
        });
        
    });
        
});
    