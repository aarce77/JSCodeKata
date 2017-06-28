describe('Algorithms', () => {

    describe('Search', () => {

        /// https://www.hackerrank.com/challenges/minimum-loss
        describe('Minimum Loss', () => {

            it('Test Case #0', () => {
                var input = '3\n5 10 3'
                var minLoss = new MinimumLoss(input);
                expect(minLoss.findMinLoss()).toBe(2);
            });

            it('Test Case #1', () => {
                var input = '5\n20 7 8 2 5'
                var minLoss = new MinimumLoss(input);
                expect(minLoss.findMinLoss()).toBe(2);
            });
        });

    });

});