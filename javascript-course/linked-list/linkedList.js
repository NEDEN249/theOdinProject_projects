function Node(value){
    return {
        value: value,
        next: null
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    getHead() { return this.head; }
    getTail() { return this.tail; }
    getLength() { return this.length; }
    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return newNode;
    }
    prepend(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return newNode;
    }
    pop(){
        if(!this.head){ //no elements to pop
            return null;
        }
        if(this.head === this.tail){ //implies removing this node will leave an empty list
            const node = this.head; //pop return value
            this.head = null; 
            this.tail = null;
            this.length--;
            return node;
        }
        let currentNode = this.head; //initial node
        while(currentNode.next !== this.tail){ //this will eventually lead to currentNode being the second to last node
            currentNode = currentNode.next;
        }
        const node = this.tail; //pop return value
        currentNode.next = null; //remove the last node from the list
        this.tail = currentNode; //change the tail to what was the second last node (now last node)
        this.length--;
        return node; //return the popped node
    }
    contains(value){
        let currentNode = this.head;
        while(currentNode.next !== null){
            if(currentNode.value == value){
                return true
            }
            currentNode = currentNode.next;
        }
        return false;
    }
    at(index){
        if (index < 0 || index >= this.length){
            return null;
        }
        let currentNode = this.head;
        let currentIndex = 0;
        while(currentNode.next !== null){
            console.log(currentNode.value);
            if(currentIndex === index){
                return currentNode.value;
            }
            else{
                currentIndex++;
                currentNode = currentNode.next;
            }
        }
        return false;
    }
    find(value){
        let currentNode = this.head;
        let index = 0;
        while(currentNode.next !== null){
            if(currentNode.value === value){
                return index;
            }
            else{
                index++;
                currentNode = currentNode.next;
            }
        }
        return null;
    }
    toString(){
        let currentNode = this.head;
        let string = '';
        while(currentNode.next !== null){
            string += currentNode.value + ' -> ';
            currentNode = currentNode.next;
        }
        string += currentNode.value;
        return string;
    }

    insertAt(value, index){
        if (index < 0 || index >= this.length){
            return null;
        }
        const newNode = new Node(value);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return newNode;
        }
        if(index === 0){ //if index is 0, then we are prepending
            this.prepend(value);
            return newNode;
        }
        if (index === this.length - 1){ //if index is the last index, then we are appending
            this.append(value);
            return newNode;
        }
        let currentNode = this.head;
        let currentIndex = 0;
        while(currentNode.next !== null){
            if(currentIndex === index){
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                this.length++;
                return newNode;
            }
            else{
                currentIndex++;
                currentNode = currentNode.next;
            }
        }
    }

    // removeAt(index){

    // }
    
}

const myLinkedUpList = new LinkedList();

myLinkedUpList.append(1);
myLinkedUpList.append(2);
myLinkedUpList.append(3);
console.log(myLinkedUpList.toString());
myLinkedUpList.prepend(4);
console.log(myLinkedUpList.toString());
myLinkedUpList.pop();
console.log(myLinkedUpList.toString());
console.log(myLinkedUpList.contains(3));
console.log(myLinkedUpList.getTail());
console.log(myLinkedUpList.getHead());
console.log(myLinkedUpList.at(2));
console.log(myLinkedUpList.contains(1));
console.log(myLinkedUpList.find(4));
console.log(myLinkedUpList.toString());
myLinkedUpList.insertAt(0, 2);
console.log(myLinkedUpList.toString());




