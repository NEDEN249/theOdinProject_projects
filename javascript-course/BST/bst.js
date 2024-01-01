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

}

const bst = new binarySearchTree([1,2,3,4,5,6,7,8,9,10]);
console.log(bst.root);
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
console.log("print 1")
prettyPrint(bst.root);
bst.insert(11);
console.log("print 2")
prettyPrint(bst.root);
bst.delete(9);
console.log("print 3")
prettyPrint(bst.root);