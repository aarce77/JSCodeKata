describe('Algorithms', () => {

    describe('Search', () => {

        describe('Pairs', () => {

            it('Test Case #0', () => {
                var input = "5 2\n1 5 3 4 2";
                var pairs = new Pairs(input);
                expect(pairs.GetPairsCount()).toBe(3);
            });


            it('Test Case #1', () => {
                var input = "10 1\n363374326 364147530 61825163 1073065718 1281246024 1399469912 428047635 491595254 879792181 1069262793";
                var pairs = new Pairs(input);
                expect(pairs.GetPairsCount()).toBe(0);
            });

        });

    });

});