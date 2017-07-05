describe('Algorithms', () => {

    describe('Strings', () => {

        describe('Separate the Numbers', () => {

            it('Sample Test Case', () => {
                let data = "7\n1234\n91011\n99100\n101103\n010203\n13\n1".split("\n");
                let queries = data.shift();
                let results = [];

                for (var idx = 0; idx < data.length; idx++) {
                    results.push(new SeparateNumbers(data[idx]).ReportBeautifulSeqeunce());
                }

                expect(results[0]).toBe("YES 1");
                expect(results[1]).toBe("YES 9");
                expect(results[2]).toBe("YES 99");
                expect(results[3]).toBe("NO");
                expect(results[4]).toBe("NO");
                expect(results[5]).toBe("NO");
                expect(results[6]).toBe("NO");
            });

            // it('Test Case 04', () => {
            //     let data = "10\n90071992547409929007199254740993\n45035996273704964503599627370497\n22517998136852482251799813685249\n11258999068426241125899906842625\n562949953421312562949953421313\n90071992547409928007199254740993\n45035996273704963503599627370497\n22517998136852481251799813685249\n11258999068426240125899906842625\n562949953421312462949953421313".split("\n");
            //     let queries = data.shift();
            //     let results = [];

            //     for (var idx = 0; idx < data.length; idx++) {
            //         results.push(new SeparateNumbers(data[idx]).ReportBeautifulSeqeunce());
            //     }

            //     expect(results[0]).toBe("YES 9007199254740992");
            //     expect(results[1]).toBe("YES 4503599627370496");
            //     expect(results[2]).toBe("YES 2251799813685248");
            //     expect(results[3]).toBe("YES 1125899906842624");
            //     expect(results[4]).toBe("YES 562949953421312");
            //     expect(results[5]).toBe("NO");
            //     expect(results[6]).toBe("NO");
            //     expect(results[7]).toBe("NO");
            //     expect(results[8]).toBe("NO");
            //     expect(results[9]).toBe("NO");
            // });

        });

    });
});