class BinaryTree
{
    constructor(data) {
        this.data = data;
        this.parent = {};
    }

    getTree() {
        var arry = this.data.slice();
        while (arry.length > 0) {
            this.addToTree(this.parent, arry.shift());
        }
        return this.parent;
    }

    addToTree(node, val) {
        if(!node.value) {
            node.value = val;
            node.left = {};
            node.right = {};
            return node;
        }
        if(val > node.value) {
            return this.addToTree(node.right, val);
        }

        return this.addToTree(node.left, val);
    }
}