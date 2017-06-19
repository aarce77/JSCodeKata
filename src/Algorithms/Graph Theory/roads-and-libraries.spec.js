
describe('Roads and Libraries', () => {
    
    it('Sample Test Case 1', () => {
        let cities = 3, roads = 3, libraryCost = 2, roadCost = 1;
        let data = "1 2\n3 1\n2 3".split('\n');
        let graph = new Graph(cities, libraryCost, roadCost);
            
        for(let a1 = 0; a1 < roads; a1++){
            let tokens_city_1 = data[a1].split(' ').map(Number);
            let city_1 = tokens_city_1[0];
            let city_2 = tokens_city_1[1];
            
            graph.AddNeighbor(city_1, city_2);
        }
        
        graph.TravseGraph();
        expect(graph.GetMinimumCost()).toBe(4);
    });

    it('Sample Test Case 2', () => {
        let cities = 6, roads = 6, libraryCost = 2, roadCost = 5;
        let data = "1 3\n3 4\n2 4\n1 2\n2 3\n5 6".split('\n');
        let graph = new Graph(cities, libraryCost, roadCost);
            
        for(let a1 = 0; a1 < roads; a1++){
            let tokens_city_1 = data[a1].split(' ').map(Number);
            let city_1 = tokens_city_1[0];
            let city_2 = tokens_city_1[1];
            
            graph.AddNeighbor(city_1, city_2);
        }
        
        graph.TravseGraph();
        expect(graph.GetMinimumCost()).toBe(12);
    }); 

    it('Test Case 1', () => {
        let cities = 9, roads = 2, libraryCost = 91, roadCost = 84;
        let data = "8 2\n2 9".split('\n');
        let graph = new Graph(cities, libraryCost, roadCost);
            
        for(let a1 = 0; a1 < roads; a1++){
            let tokens_city_1 = data[a1].split(' ').map(Number);
            let city_1 = tokens_city_1[0];
            let city_2 = tokens_city_1[1];
            
            graph.AddNeighbor(city_1, city_2);
        }
        
        graph.TravseGraph();
        expect(graph.GetMinimumCost()).toBe(805);
    }); 
});
    