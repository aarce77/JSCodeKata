
describe('Algorithms', () => {

    describe('Strings', () => {

        describe('Gemstones', function () {

            it('Test Case #1', function () {
                var data = ['abcdde', 'baccd', 'eeabg'];
                var gem = new Gemstones(data);
                expect(gem.CommonGemCount).toBe(2);
            });

        });

    });

});