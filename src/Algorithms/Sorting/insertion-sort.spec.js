describe('Algorithms', () => {

    describe('Sorting', () => {

        describe('Insertion Sort', () => {

            it('Test Case #0', () => {
                var input = "6\n1 4 3 5 6 2";
                var results = new InsertionSort(input).Solve();

                expect(results.length).toBe(6);
                
                expect(results[0]).toBe(1);
                expect(results[1]).toBe(2);
                expect(results[2]).toBe(3);
                expect(results[3]).toBe(4);
                expect(results[4]).toBe(5);
                expect(results[5]).toBe(6);
            });

            it('Test Case #1', () => {
                var input = "6\n1 4 3 6 5 2 10 0";
                var results = new InsertionSort(input).Solve();

                expect(results.length).toBe(8);
                
                expect(results[0]).toBe(0);
                expect(results[1]).toBe(1);
                expect(results[2]).toBe(2);
                expect(results[3]).toBe(3);
                expect(results[4]).toBe(4);
                expect(results[5]).toBe(5);
                expect(results[6]).toBe(6);
                expect(results[7]).toBe(10);
            });

        });

    });

});