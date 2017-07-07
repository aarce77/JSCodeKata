describe('Algorithms', () => {

    describe('Implementation', () => {
        
        describe('Fibonacci', () => {
            
            it('should return zero items', () => {
                var fib = new Fibonacci(0);
                expect(fib.GetSequence().length).toBe(0);
            });

            it('should return one item', () => {
                var fib = new Fibonacci(1);
                var seq = fib.GetSequence();
                expect(seq.length).toBe(1);
                expect(seq[0]).toBe(1);
            });

            it('should return 5 items', () => {
                var fib = new Fibonacci(7);
                var seq = fib.GetSequence();
                expect(seq.length).toBe(7);
                expect(seq[0]).toBe(1);
                expect(seq[1]).toBe(1);
                expect(seq[2]).toBe(2);
                expect(seq[3]).toBe(3);
                expect(seq[4]).toBe(5);
                expect(seq[5]).toBe(8);
                expect(seq[6]).toBe(13);
            });
        });

    });

});