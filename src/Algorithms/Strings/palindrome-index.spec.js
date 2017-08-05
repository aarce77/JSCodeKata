describe('Algorithms', () => {

    describe('Strings', () => {

        describe('Palindrome Index', () => {

            it('Sample Test Case', () => {
                expect(new PalindromeIndex("aaab").Solve()).toBe(3);
                expect(new PalindromeIndex("baa").Solve()).toBe(0);
                expect(new PalindromeIndex("aaa").Solve()).toBe(-1);
                expect(new PalindromeIndex("dad").Solve()).toBe(-1);
            });

        });

    });

});