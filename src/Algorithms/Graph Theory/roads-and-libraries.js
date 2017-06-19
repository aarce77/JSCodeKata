class Graph {
    constructor(cities, libraryCost, roadCost) {
        this.Cities = cities;
        this.RoadCost = roadCost;
        this.LibraryCost = libraryCost;
        this.TotalCost = 0;
            
        this.Vertices = new Array(cities);
        this.Visited = new Array(cities);
        this.Visited.fill(false);
            
        for (let i = 0; i < this.Cities; i++) {
            this.Vertices[i] = new Vertex((i+1).toString(), null);
        }
    }

    GetMinimumCost() {
        if(this.LibraryCost * this.Cities < this.TotalCost) {
            return this.LibraryCost * this.Cities;
        }
        return this.TotalCost;
    }

    TravseGraph() {
        for (let i = 0; i < this.Visited.length; i++) {
            if (!this.Visited[i]) {
                this.Visited[i] = true;
                this.TotalCost = this.TotalCost + this.LibraryCost;

                this.WalkGraph(i + 1);
            }
        }
    }

    WalkGraph(vertex) {
        var nbr = this.Vertices[vertex-1].Neighbors;

        while (nbr != null) {
            if (!this.Visited[nbr.VertexNumber-1]) {
                this.TotalCost = this.TotalCost + this.RoadCost;
                this.Visited[nbr.VertexNumber - 1] = true;
                this.WalkGraph(nbr.VertexNumber);
            }
            nbr = nbr.NextNeighbor;
        }
    }

    AddNeighbor(v1, v2)
    {
        var vert1 = this.Vertices[v1-1];
        var vert2 = this.Vertices[v2-1];
        
        vert1.Neighbors = new Neighbor(v2, vert1.Neighbors);
        vert2.Neighbors = new Neighbor(v1, vert2.Neighbors);
    }
}

class Vertex {
    constructor(name, neighbors) {
        this.Name = name;
        this.Neighbors = neighbors;
    }
}

class Neighbor {
    constructor(vertexNumber, nextNeighbor) {
        this.VertexNumber = vertexNumber;
        this.NextNeighbor = nextNeighbor;
    }
}