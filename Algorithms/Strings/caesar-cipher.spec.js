
describe('Caesar Cipher', () => {
var sampleTestData = `11
middle-Outz
2`;

var withNumbers = `11
middle-Outz12_2ay
2`;

var testCase2 = `10
www.abc.xy
87`;

var testCase3 = `10
159357lcfd
98`;

    it('Sample Test Case', () => {
        let cc = new CaesarCipher(sampleTestData);
        let result = cc.encrypt();

        expect(result).toBe("okffng-Qwvb");
    });

    it('With Numbers', () => {
        let cc = new CaesarCipher(withNumbers);
        let result = cc.encrypt();

        expect(result).toBe("okffng-Qwvb12_2ca");
    }); 

    
    it('Test Case #2', () => {
        let cc = new CaesarCipher(testCase2);
        debugger;
        let result = cc.encrypt();

        expect(result).toBe("fff.jkl.gh");
    });

    it('Test Case #3', () => {
        let cc = new CaesarCipher(testCase3);
        debugger;
        let result = cc.encrypt();

        expect(result).toBe("159357fwzx");
    });
        
});
