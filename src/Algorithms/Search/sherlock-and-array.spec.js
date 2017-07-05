describe('Algorithms', () => {

    describe('Search', () => {

        describe('Sherlock And Array', () => {
            
            it('Sample Test Case', () => {
                let sherlock = new SherlockArray([1,2,3]);
                expect(sherlock.solve()).toBe(false);

                sherlock = new SherlockArray([1,2,3,3]);
                expect(sherlock.solve()).toBe(true);
            });

            it('Test Case #6', () => {
                let sherlock = new SherlockArray([1]);
                expect(sherlock.solve()).toBe(true);

                sherlock = new SherlockArray([1,2]);
                expect(sherlock.solve()).toBe(false);

                sherlock = new SherlockArray([1,4,1]);
                expect(sherlock.solve()).toBe(true);

                sherlock = new SherlockArray([6,23,6]);
                expect(sherlock.solve()).toBe(true);
            });
        });

    });

});
