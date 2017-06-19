
describe('Mars Exploration', () => {
    
    it('Sample Test Case 1', () => {
        let mars = new MarsExploration("SOSSPSSQSSOR");
        
        expect(mars.GetNonMatchingCount()).toBe(3);
    });

    it('Sample Test Case 2', () => {
        let mars = new MarsExploration("SOSSOT");
        
        expect(mars.GetNonMatchingCount()).toBe(1);
    }); 

    it('Should contain zero matches', () => {
        let mars = new MarsExploration("SOS");
        
        expect(mars.GetNonMatchingCount()).toBe(0);
    }); 
});
    