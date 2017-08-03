describe('Algorithms', () => {

    describe('Sorting', () => {

        describe('Quick Sort 3', () => {

            it('Test Case #0', () => {
                var input = "7\n1 3 9 8 2 7 5";
                var results = new QuickSort3(input).Solve();

                expect(results.length).toBe(7);

                expect(results[0]).toBe(1);
                expect(results[1]).toBe(2);
                expect(results[2]).toBe(3);
                expect(results[3]).toBe(5);
                expect(results[4]).toBe(7);
                expect(results[5]).toBe(8);
                expect(results[6]).toBe(9);
            });

            it('Test Case #1', () => {
                var input = "9\n9 8 6 7 3 5 4 1 2";
                var results = new InsertionSort(input).Solve();

                expect(results.length).toBe(9);
                
                expect(results[0]).toBe(1);
                expect(results[1]).toBe(2);
                expect(results[2]).toBe(3);
                expect(results[3]).toBe(4);
                expect(results[4]).toBe(5);
                expect(results[5]).toBe(6);
                expect(results[6]).toBe(7);
                expect(results[7]).toBe(8);
                expect(results[8]).toBe(9);
            });

            it('Test Case #2', () => {
                var input = "9\n318 472 46 12 128 10 149 497 20";
                var results = new InsertionSort(input).Solve();

                expect(results.length).toBe(9);
                
                expect(results[0]).toBe(10);
                expect(results[1]).toBe(12);
                expect(results[2]).toBe(20);
                expect(results[3]).toBe(46);
                expect(results[4]).toBe(128);
                expect(results[5]).toBe(149);
                expect(results[6]).toBe(318);
                expect(results[7]).toBe(472);
                expect(results[8]).toBe(497);
            });
        });

    });

});