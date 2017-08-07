describe('Algorithms', () => {

    describe('Implementation', () => {
        
        describe('Circular Array Rotation', () => {
            
            it('Sample Test Case', () => {
                var car = new CircularArrayRotation([1,2,3],2);
                expect(car.Solve(0)).toBe(2);
                expect(car.Solve(1)).toBe(3);
                expect(car.Solve(2)).toBe(1);
            });

            it('Rotation large then array length', () => {
                var car = new CircularArrayRotation([1,2,3],4);
                expect(car.Solve(0)).toBe(3);
                expect(car.Solve(1)).toBe(1);
                expect(car.Solve(2)).toBe(2);
            });
        });

    });

});