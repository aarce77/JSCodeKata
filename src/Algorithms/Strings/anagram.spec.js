
describe('Algorithms', () => {

    describe('Strings', () => {

        describe('Anagram', () => {

            it('Should return true', () => {
                let anagram = new Anagram("cisnhetgkl", "hcgnstlkei");

                expect(anagram.IsValid()).toBe(true);
            });

            it('Should return false', () => {
                let anagram = new Anagram("cisnhetgkp", "hcgnstlkei");

                expect(anagram.IsValid()).toBe(false);
            });

            it('Should return false due to length mismatch', () => {
                let anagram = new Anagram("cisnhetgkl", "hcgnstlke");

                expect(anagram.IsValid()).toBe(false);
            });

        });

    });

});
