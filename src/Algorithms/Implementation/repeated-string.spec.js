describe('Algorithms', () => {
    
        describe('Implementation', () => {
            
            describe('Repeated String', () => {
                
                it('Test Case #0', () => {
                    expect(new RepeatedString().Solve(10,'aba')).toBe(7);
                });
    
                it('Test Case #1', () => {
                    expect(new RepeatedString().Solve(1000000000000,'a')).toBe(1000000000000);
                });

                it('Test Case #3', () => {
                    expect(new RepeatedString().Solve(7,'aab')).toBe(5);
                });
            });
    
        });
    
    });