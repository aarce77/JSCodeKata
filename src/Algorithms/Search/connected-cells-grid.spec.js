
describe('Algorithms', () => {

    describe('Search', () => {

        describe('Connected Cells in a Grid', () => {
            /// https://www.hackerrank.com/challenges/connected-cell-in-a-grid

            it('Sample Test Case', () => {
                var input = "4\n4\n1 1 0 0\n0 1 1 0\n0 0 1 0\n1 0 0 0";
                var ccg = new ConnectedCellsGrid(input);
                expect(ccg.GetConnectedCells()).toBe(5);
            });

            it('Test Case #0', () => {
                var input = "5\n5\n1 1 0 0 0\n0 1 1 0 0\n0 0 1 0 1\n1 0 0 0 1\n0 1 0 1 1";
                var ccg = new ConnectedCellsGrid(input);
                expect(ccg.GetConnectedCells()).toBe(5);
            });

            it('Diagonal Connections', () => {
                var input = '4\n4\n0 1 0 0\n0 0 1 0\n0 1 0 1\n1 0 0 0';
                var ccg = new ConnectedCellsGrid(input);
                expect(ccg.GetConnectedCells()).toBe(5);
            });

            it('Test Case #6', () => {
                var input = '8\n9\n0 1 0 0 0 0 1 1 0\n1 1 0 0 1 0 0 0 1\n0 0 0 0 1 0 1 0 0\n0 1 1 1 0 1 0 1 1\n0 1 1 1 0 0 1 1 0\n0 1 0 1 1 0 1 1 0\n0 1 0 0 1 1 0 1 1\n1 0 1 1 1 1 0 0 0';
                var ccg = new ConnectedCellsGrid(input);
                expect(ccg.GetConnectedCells()).toBe(29);
            });

        });

    });

});