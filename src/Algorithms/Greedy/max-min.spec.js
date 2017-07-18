describe('Algorithms', () => {

    describe('Greedy', () => {

        describe('Max Min', () => {

            it('Test Case #0', () => {
                let data = "7\n3\n10\n100\n300\n200\n1000\n20\n30";
                let mm = new MaxMin(data);

                expect(mm.MinimumUnfairness).toBe(20);
            });

            it('Test Case #1', () => {
                let data = "10\n4\n1\n2\n3\n4\n10\n20\n30\n40\n100\n200";
                let mm = new MaxMin(data);

                expect(mm.MinimumUnfairness).toBe(3);
            });

            it('Test Case #4', () => {
                let data = "100\n25\n7652\n1377\n7089\n2736\n4748\n1615\n4235\n3461\n3895\n8328\n175\n8131\n4877\n5606\n4730\n3563\n2210\n966\n7842\n9551\n152\n9079\n5366\n2158\n1236\n8046\n2660\n5528\n544\n6965\n2428\n8197\n4694\n5869\n7285\n5794\n3837\n1521\n9255\n4084\n9849\n5782\n2215\n4726\n1388\n3297\n4641\n9950\n615\n8836\n5853\n768\n4267\n1219\n9278\n5503\n9265\n8290\n7383\n6162\n5255\n6163\n711\n6301\n2033\n7996\n2095\n2222\n9517\n7702\n6306\n5718\n3484\n4873\n6797\n1224\n8170\n1438\n1175\n8785\n274\n3380\n5905\n4541\n4600\n5183\n6396\n3865\n3473\n3780\n27\n5080\n9943\n738\n7733\n8328\n5087\n9828\n550\n4604";
                let mm = new MaxMin(data);

                expect(mm.MinimumUnfairness).toBe(1563);
            });

            it('Test Case #16', () => {
                let data = "7\n3\n100\n200\n300\n350\n400\n401\n402";
                let mm = new MaxMin(data);

                expect(mm.MinimumUnfairness).toBe(2);
            });
        });

    });

});