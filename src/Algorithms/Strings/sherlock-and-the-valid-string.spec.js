describe('Algorithms', () => {

	describe('Strings', () => {
		
		describe('Sherlock and the Valid String', function () {

			it('Sample Test Case #0', function () {
				var vs = new SherlockValidString("aabbccf");
				expect(vs.Solve()).toBe("YES");
            });
            
            it('Sample Test Case #1', function () {
				var vs = new SherlockValidString("aabbccfg");
				expect(vs.Solve()).toBe("NO");
            });
            
            it('Test Case #2', function () {
				var vs = new SherlockValidString("hfchdkkbfifgbgebfaahijchgeeeiagkadjfcbekbdaifchkjfejckbiiihegacfbchdihkgbkbddgaefhkdgccjejjaajgijdkd");
				expect(vs.Solve()).toBe("YES");
            });

		});
	});
});