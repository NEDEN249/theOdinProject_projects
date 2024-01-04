function Node(value){
    return {
        data: value,
        left: null,
        right: null
    }
}

class binarySearchTree{
    constructor(arr){
        this.root = this.buildTree(arr);
    }

    buildTree(arr){
        if(arr.length === 0){
            return null;
        }
        const middle = Math.floor(arr.length / 2); //this is the middle of the array
        const root = new Node(arr[middle]); //this is the root of the tree
        //below is the recursive call to build the tree using the middle of the lhs and rhs to build the tree
        root.left = this.buildTree(arr.slice(0, middle)); //this is the middle of the lhs 
        root.right = this.buildTree(arr.slice(middle + 1)); //this is the middle of the rhs
        return root;
    }
    insert(value){
        const newNode = new Node(value);
        if(!this.root){ //no root -> create value as root
            this.root = newNode;
            return this;
        }
        let currentNode = this.root;
        while(true){ //loop until we find a place to insert the value 
            if(value < currentNode.data){ //if value is less than current node, go left
                if(!currentNode.left){ //if current node is vacant, insert the value
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            }
            else{ //if value is greater than or equal to current node, go right
                if(!currentNode.right){ //once we have found a vacant spot, insert the value
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }
    delete(value){
        if(!this.root){
            return null;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(true){ //loop until we find the value
            if (value < currentNode.data){ //go left
                parentNode = currentNode;
                currentNode = currentNode.left;
            }
            else if (value > currentNode.data){ //go right
                parentNode = currentNode;
                currentNode = currentNode.right;
            }
            else{
                if(!currentNode.right && !currentNode.left){ //no child
                    if(!parentNode){
                        this.root = null;
                        return this;
                    }
                    if(parentNode.left === currentNode){
                        parentNode.left = null;
                        return this;
                    }
                    else{
                        parentNode.right = null;
                        return this;
                    }
                }
                else if(currentNode.right && !currentNode.left){ //right child only
                    if(!parentNode){
                        this.root = currentNode.right;
                        return this;
                    }
                    if(parentNode.left === currentNode){
                        parentNode.left = currentNode.right;
                        return this;
                    }
                    else{
                        parentNode.right = currentNode.right;
                        return this;
                    }
                }
                else if (!currentNode.right && currentNode.left){ //left child only
                    if(!parentNode){
                        this.root = currentNode.left;
                        return this;
                    }
                    if(parentNode.left === currentNode){
                        parentNode.left = currentNode.left;
                        return this;
                    }
                    else{
                        parentNode.right = currentNode.left;
                        return this;
                    }
                }
                else { //essentially the node we are deleting is a parent node with a child on left and right side, we will replace this node with the right subtree's leftmost child
                    let minRight = currentNode.right; //find the right child's leftmost child 
                    while(minRight.left !== null){
                        minRight = minRight.left;
                    }
                    //delete the leftmost child of the right child
                    const temp = minRight.data; //store the value of the leftmost child of the right child
                    this.delete(minRight.data); //delete the leftmost child of the right child
                    currentNode.data = temp; //replace the value of the node to be deleted with the value of the leftmost child of the right child
                    return this;
                }
            }
        }
    }
    find(value){
        if(!this.root){
            return null;
        }
        let currentNode = this.root;
        while(true){
            if (value < currentNode.data){ //go left
                currentNode = currentNode.left;
            }
            else if(value > currentNode.data){ //go right
                currentNode = currentNode.right;
            }
            else{ //value === currentNode.data
                return currentNode;
            }
        }
    }
    levelorder(callback){ //bfs
        if(!this.root){
            return null;
        }
        const values = [];
        const queue = [];
        queue.push(this.root);
        while(queue.length > 0){
            const currentNode = queue.shift();
            values.push(currentNode.data);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
        return values;
    }
    inOrder(callback){
        if(!this.root){
            return null;
        }
        const values = [];
        function traverse(node){
            if(node.left){
                traverse(node.left);
            }
            values.push(node.data);
            if(node.right){
                traverse(node.right);
            }
        }
        traverse(this.root);
        return values;
    }
    preOrder(callback){
        if(!this.root){
            return null;
        }
        const values = [];
        function traverse(node){
            values.push(node.data);
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right);
            }
        }
        traverse(this.root);
        return values;
    }
    postOrder(callback){
        if(!this.root){
            return null;
        }
        const values = [];
        function traverse(node){
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right);
            }
            values.push(node.data);
        }
        traverse(this.root);
        return values;
    }
    height(node){
        if(!node){
            return -1;
        }
        const left = this.height(node.left);
        const right = this.height(node.right);
        return Math.max(left, right) + 1;
    }
    isBalanced(){
        if(!this.root){
            return null;
        }
        let balanced = true;
        let result = this.traverse(this.root);
        if(result === false){
            balanced = false;
        }
        return balanced;
    }
    traverse(node){
        if(node.left){
            this.traverse(node.left);
        }
        if(node.right){
            this.traverse(node.right);
        }
        if(Math.abs(this.height(node.left) - this.height(node.right)) > 1){
            return false;
        }
    }
    rebalance(){
        const values = this.inOrder();
        this.root = this.buildTree(values);
        return this;
    }
}
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

function script(){
    const arr = [];
    for(let i = 0; i < 20; i++){
        arr.push(Math.floor(Math.random() * 100));
    }
    const bst = new binarySearchTree(arr);
    console.log(bst.isBalanced());
    console.log(bst.levelorder());
    console.log(bst.preOrder());
    console.log(bst.postOrder());
    console.log(bst.inOrder());
    bst.insert(101);
    bst.insert(102);
    bst.insert(103);
    bst.insert(104);
    bst.insert(105);
    bst.insert(86);
    bst.insert(107);
    bst.insert(18);
    bst.insert(109);
    bst.insert(110);
    console.log(bst.isBalanced());
    bst.rebalance();
    console.log(bst.isBalanced());
    console.log(bst.levelorder());
    console.log(bst.preOrder());
    console.log(bst.postOrder());
    console.log(bst.inOrder());
}
script();