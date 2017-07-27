describe('Algorithms', () => {

    describe('Implementation', () => {
        
        describe('Utopian Tree', () => {
            
            it('Test Case #0', () => {
                var ut = new UtopianTree();
                expect(ut.Solve(0)).toBe(1);
                expect(ut.Solve(1)).toBe(2);
            });

            it('Test Case #1', () => {
                var ut = new UtopianTree();
                expect(ut.Solve(4)).toBe(7);
                expect(ut.Solve(3)).toBe(6);
            });
        });

    });

});