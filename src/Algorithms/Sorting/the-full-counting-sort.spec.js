describe('Algorithms', () => {

    describe('Sorting', () => {

        describe('The Full Counting Sort', () => {

            it('Test Case #0', () => {
                var input = `20\n0 ab\n6 cd\n0 ef\n6 gh\n4 ij\n0 ab\n6 cd\n0 ef\n6 gh\n0 ij\n4 that\n3 be\n0 to\n1 be\n5 question\n1 or\n2 not\n4 is\n2 to\n4 the\n`;
                var results = new TheFullCountingSort(input).Solve();

                expect(results).toBe("- - - - - to  be or not to be - that is the question - - - -");
            });

        });

    });

});