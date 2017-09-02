describe('Algorithms', () => {
    
        describe('Implementation', () => {
            
            describe('ACM ICPC Team', () => {
                
                it('Sample Test Case', () => {
                    var acm = new ACM_ICPC_Team([ [ 1, 0, 1, 0, 1 ],
                        [ 1, 1, 1, 0, 0 ],
                        [ 1, 1, 0, 1, 0 ],
                        [ 0, 0, 1, 0, 1 ] ]);
                    expect(acm.Max).toBe(5);
                    expect(acm.Teams).toBe(2);
                });
    
            });
    
        });
    
    });