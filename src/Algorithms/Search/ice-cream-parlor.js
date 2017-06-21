class IceCreamParlor {
    constructor(money, favors) {
        this.Money = money;
        this.Favors = favors;
        this.Tree = this.getTree();
    }

    findLocations() {
        var idx = -1;
        var cIdx = 0;

        while(cIdx < this.Favors.length) {
            var toSpend = this.Money - this.Favors[cIdx];
            if(toSpend <= 0) { cIdx++; continue; }

            var current = { value: toSpend, index: cIdx};

            var node = this.walkTree(this.Tree, current);
            if(node) {
                idx = node.data.index;
                break;
            }
            cIdx++;
        }
        return {location1: cIdx+1, location2: idx+1};
    }

    walkTree(node, current) {
        if(!node.data) { return null; }
        if(node.data.value === current.value && node.data.index != current.index) {
            return node;
        }

        if(node.data.value < current.value) {
            return this.walkTree(node.right, current);
        }
        return this.walkTree(node.left, current);
    }

    getTree() {
        this.parent = {};
        var arry = this.Favors.slice();
        var idx = 0;
        while (arry.length > 0) {
            this.addToTree(this.parent, {value: arry.shift(),index: idx});
            idx++;
        }
        return this.parent;
    }

    addToTree(node, data) {
        if(!node.data) {
            node.data = data;
            node.left = {};
            node.right = {};
            return node;
        }
        if(data.value > node.data.value) {
            return this.addToTree(node.right, data);
        }

        return this.addToTree(node.left, data);
    }
}

var testData = "2 1 9 4 4 56 90 3".split(' ').map(Number);
var parlor = new IceCreamParlor(8, testData);
console.log(parlor.findLocations());