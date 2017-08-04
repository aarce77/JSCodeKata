describe('Algorithms', () => {

    describe('Sorting', () => {

        describe('Closet Numbers', () => {

            it('Sample Cas', () => {
                var input = "10\n-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854";
                expect(new ClosestNumbers(input).Solve().join(" ")).toBe("-20 30");

                input = "4\n5 4 3 2";
                
                expect(new ClosestNumbers(input).Solve().join(" ")).toBe("2 3 3 4 4 5");

                input = "12\n-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854 -520 -470";
                expect(new ClosestNumbers(input).Solve().join(" ")).toBe("-520 -470 -20 30");
            });
                
        });

    });

});