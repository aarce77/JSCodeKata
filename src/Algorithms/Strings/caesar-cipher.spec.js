
describe('Algorithms', () => {

    describe('Strings', () => {

        describe('Caesar Cipher', () => {

            it('Sample Test Case', () => {
                var sampleTestData = `11\nmiddle-Outz\n2`;
                let cc = new CaesarCipher(sampleTestData);
                let result = cc.encrypt();

                expect(result).toBe("okffng-Qwvb");
            });

            it('With Numbers', () => {
                var withNumbers = `11\nmiddle-Outz12_2ay\n2`;
                let cc = new CaesarCipher(withNumbers);
                let result = cc.encrypt();

                expect(result).toBe("okffng-Qwvb12_2ca");
            });


            it('Test Case #2', () => {
                var testCase2 = `10\nwww.abc.xy\n87`;
                let cc = new CaesarCipher(testCase2);
                let result = cc.encrypt();

                expect(result).toBe("fff.jkl.gh");
            });

            it('Test Case #3', () => {
                var testCase3 = `10\n159357lcfd\n98`;
                let cc = new CaesarCipher(testCase3);
                let result = cc.encrypt();

                expect(result).toBe("159357fwzx");
            });

        });

    });

});
