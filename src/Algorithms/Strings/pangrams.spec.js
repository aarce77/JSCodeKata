
describe('Algorithms', () => {

    describe('Strings', () => {

        describe('Pangrams', () => {

            it('Sample Test Case, is a pangram', () => {
                var pangrams = new Pangrams("We promptly judged antique ivory buckles for the next prize");
                expect(pangrams.IsPangram()).toBe(true);
            });

            it('Sample Test Case, is not a pangram', () => {
                var pangrams = new Pangrams("We promptly judged antique ivory buckles for the prize");
                expect(pangrams.IsPangram()).toBe(false);
            });
        });

    });

});