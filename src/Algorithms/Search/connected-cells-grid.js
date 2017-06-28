/// https://www.hackerrank.com/challenges/connected-cell-in-a-grid
class ConnectedCellsGrid {
    constructor(input) {
        let data = input.split('\n');
        this.rows = +data.shift();
        this.cols = +data.shift();

        this.Matrix = [];
        this.Cells = new Map();
        this.Visited = new Map();
        this.ConnectedCells = 0;
        this.CellCount = 0;

        this.Initialize(data);
    }

    Initialize(data) {

        for (let idx = 0; idx < data.length; idx++) {
            this.Matrix.push(data[idx].split(" ").map(Number));
        }

        for (let rIdx = 0; rIdx < this.Matrix.length; rIdx++) {

            for (let cIdx = 0; cIdx < this.Matrix[rIdx].length; cIdx++) {
                this.FindConnections(rIdx, cIdx);
            }
        }

        this.TravseTree();
    }

    FindConnections(r, c, cell) {
        if(r < 0 || c < 0 || r >= this.Matrix.length || c >= this.Matrix[r].length) {
            return;
        }
        if(this.Matrix[r][c] !== 1) {
            return;
        }

        this.Matrix[r][c] = 2;
        let key = this.GetKey(r,c);
        let nbr = this.GetCell(key);

        if(cell) { cell.addNeighbor(nbr); }

        this.FindConnections(r-1,c-1,nbr);
        this.FindConnections(r-1,c,nbr);
        this.FindConnections(r-1,c+1,nbr);

        this.FindConnections(r,c-1,nbr);
        this.FindConnections(r,c+1,nbr);

        this.FindConnections(r+1,c-1,nbr);
        this.FindConnections(r+1,c,nbr);
        this.FindConnections(r+1,c+1,nbr);
    }

    GetKey(r, c) {
        return (r*this.cols) + (c+1);
    }

    GetCell(key) {
        if(this.Cells.has(key)) {
            return this.Cells.get(key);
        }
        let cell = new Cell(key,key,null);
        this.Cells.set(key,cell);
        this.Visited.set(key,false);
        return cell;
    }

    TravseTree() {
        this.Visited.forEach((value, key, map) => {
            this.CellCount = 1;
            map.set(key, true);
            this.WalkTree(key);

            if(this.CellCount > this.ConnectedCells) {
                this.ConnectedCells = this.CellCount;
            }
        });
    }

    WalkTree(cellNum) {
        let cell = this.Cells.get(cellNum);

        for(let c = 0; c < cell.Cells.length; c++) {
            let nbr = cell.Cells[c];
            if (!this.Visited.get(nbr.CellNumber)) {
                this.CellCount = this.CellCount + 1;
                this.Visited.set(nbr.CellNumber, true);
                this.WalkTree(nbr.CellNumber);
            }
        }
    }

    GetConnectedCells() {
        return this.ConnectedCells;
    }
}


class Cell {

    constructor(name, number, neighborCell) {
        this.Name = name;
        this.CellNumber = number;
        this.Cells = [];
        if(neighborCell) {
            this.addNeighbor(neighborCell);
        }
    }

    addNeighbor(neighbor) {
        this.Cells.push(neighbor);
    }
}

// var input = '3\n3\n0 1 0\n1 1 0\n0 0 1';
// var input = '8\n9\n0 1 0 0 0 0 1 1 0\n1 1 0 0 1 0 0 0 1\n0 0 0 0 1 0 1 0 0\n0 1 1 1 0 1 0 1 1\n0 1 1 1 0 0 1 1 0\n0 1 0 1 1 0 1 1 0\n0 1 0 0 1 1 0 1 1\n1 0 1 1 1 1 0 0 0';
// var ccg = new ConnectedCellsGrid(input);
// console.log(ccg.GetConnectedCells());

/*
0 1 0
1 1 0
0 0 1
*/