class DnaHealth3 {
    constructor(genes, health) {
        this.genes = genes;
        this.health = health;
        this.rootNode = {child: {}, isEnd: false, healthValues: [], indexes: [] };
        this.BuildTrie();
    }

    BuildTrie() {
        for (var idx = 0; idx < this.genes.length; idx++) {
            var gene = this.genes[idx];
            this.Add(gene, idx, this.health[idx]);
        }
        var root = rootNode;
    }

    Add(word, index, healthValue, node = this.rootNode) {
        var previousHealth = 0
        if(word === '') {
            node.isEnd = true;
            
            var len = node.healthValues.length;
            if(len > 0) { previousHealth = node.healthValues[len-1]; }

            node.indexes.push(index);
            node.healthValues.push(previousHealth + healthValue);
            return node;
        }
        var key = word[0];
        if(node.child[key]) {
            return this.Add(word.substring(1), index, healthValue, node.child[key]);
        }
        var cNode = { key: key, child: {}, isEnd: false, healthValues: [], indexes: [] };
        node.child[key] = cNode;
        return this.Add(word.substring(1), index, healthValue, cNode);
    }

    CalculateHealth(start, end, word)
    {
        var health = 0;
        while (word.length > 0)
        {
            health += this.FindHealth(start, end, word, this.rootNode);
            word = word.substring(1);
        }
        return health;
    }

    FindHealth(start, end, word, node)
    {
        var health = 0;
        while (word)
        {
            if (!node.child[word[0]]) {
                return node.isEnd ? node.health : 0;
            }
            health += node.health;
            node = node.child[word[0]];
            word = word.substring(1);
        }
        health += node.health;
        return node.isEnd ? node.health : 0;
    }

    GetHealthValue(start, end, healthValues)
    {
        var sum = 0;
        // for(var i=start; i<end/2; i++) {

        // }
        // foreach (var healthValue in healthValues)
        // {
        //     if (healthValue.Key > end)
        //         break;

        //     if (healthValue.Key >= start && healthValue.Key <= end)
        //         sum += healthValue.Value;
        // }
        return sum;
    }
}

var dna = new DnaHealth3(["b","c","aa","d","b", "a"], [1, 2, 3, 4, 5, 6]);
//console.log(dna.CalculateHealth(1,5, "caaab"));