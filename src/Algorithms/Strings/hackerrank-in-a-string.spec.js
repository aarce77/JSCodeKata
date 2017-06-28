describe('Algorithms', () => {

    describe('Strings', () => {

        describe('HackerRank in a String!', () => {

            it('Sample Test Case 1, should contain word', () => {
                var hrs = new HackerRankInAString("hereiamstackerrank", "hackerrank");
                expect(hrs.ContainsWord()).toBe(true);
            });

            it('Sample Test Case 1, should not contain word', () => {
                var hrs = new HackerRankInAString("hackerworld", "hackerrank");
                expect(hrs.ContainsWord()).toBe(false);
            });

            it('Should not contain word, using actaul word', () => {
                var hrs = new HackerRankInAString("hackerrank", "hackerrank");
                expect(hrs.ContainsWord()).toBe(true);
            });
        });

    });

});