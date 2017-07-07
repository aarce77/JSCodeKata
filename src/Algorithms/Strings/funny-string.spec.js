describe('Algorithms', () => {

    describe('Strings', () => {

        describe('Funny String', function () {

            it('Sample Test Case #1', function () {
                var fStr = new FunnyString("acxz");
                expect(fStr.IsFunny()).toBe(true);
            });

            it('Sample Test Case #2', function () {
                var fStr = new FunnyString("bcxz");
                expect(fStr.IsFunny()).toBe(false);
            });

        });

    });

});