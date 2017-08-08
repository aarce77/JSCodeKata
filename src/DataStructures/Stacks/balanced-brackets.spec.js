describe('Data Structure', () => {
    
    describe('Stacks', () => {
        
        describe('Balanced Brackets', () => {
            it('Sample Test Case', () => {
                expect(new BalancedBrackets("{[()]}").Solve()).toBe(true);
                expect(new BalancedBrackets("{[(])}").Solve()).toBe(false);
                expect(new BalancedBrackets("{{[[(())]]}}").Solve()).toBe(true);
            });

            it('Sample Test Case', () => {

                expect(new BalancedBrackets("}][}}(}][))]").Solve()).toBe(false);
                expect(new BalancedBrackets("[](){()}").Solve()).toBe(true);
                expect(new BalancedBrackets("()").Solve()).toBe(true);
                expect(new BalancedBrackets("({}([][]))[]()").Solve()).toBe(true);
                expect(new BalancedBrackets("{)[](}]}]}))}(())(").Solve()).toBe(false);
                expect(new BalancedBrackets("([[)").Solve()).toBe(false);
            });
        });
        
    });
        
});
    