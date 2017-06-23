
describe('Missing Numbers', () => {
    
    it('Sample Test Case', () => {
        var data = "10\n203 204 205 206 207 208 203 204 205 206\n13\n203 204 207 204 205 206 207 205 208 203 206 205 206 204";

        var mn = new MissingNumbers(data);
        var results = mn.GetMissingNumbers();

        expect(results[0]).toBe('204');
        expect(results[1]).toBe('205');
        expect(results[2]).toBe('206');
        expect(results[3]).toBe('207');
    });
        
});
    