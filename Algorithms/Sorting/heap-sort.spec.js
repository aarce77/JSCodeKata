
describe('Heap Sort', () => {

    it('Test Case #1', () => {
        var data = [4,10,3,5,1,7,11,2,0,13];
        var hs = new HeapSort(data);

        var results = hs.sort();

        expect(results.length).toBe(10);
        //0,1,2,3,4,5,7,10,11,13
        expect(results[0]).toBe(0);
        expect(results[1]).toBe(1);
        expect(results[2]).toBe(2);
        expect(results[3]).toBe(3);
        expect(results[4]).toBe(4);
        expect(results[5]).toBe(5);
        expect(results[6]).toBe(7);
        expect(results[7]).toBe(10);
        expect(results[8]).toBe(11);
        expect(results[9]).toBe(13);
    });

});