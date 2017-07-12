describe('Algorithms', () => {

    describe('Strings', () => {

        describe('The Love Letter Mystery', () => {

            it('Sample Test', () => {
                let data = "abc\nabcba\nabcd\ncba".split("\n");
                let results = [];

                for (var idx = 0; idx < data.length; idx++) {
                    results.push(new LoveLetterMystery(data[idx]).GetOperationCount());
                }

                expect(results[0]).toBe(2);
                expect(results[1]).toBe(0);
                expect(results[2]).toBe(4);
                expect(results[3]).toBe(2);
            });

            
        });

    });

});