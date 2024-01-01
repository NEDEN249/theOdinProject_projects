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
        if (index < 0 || index > this.length){ //invalid index
            return null;
        }

        const newNode = new Node(value);

        if (!this.head){ //if the list is empty
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return newNode;
        }

        if(index === 0){ //if index is 0, then we are prepending
            this.prepend(value);
            return newNode;
        }

        if (index === this.length){ //if index is 1 after the last node, then we are appending
            this.append(value);
            return newNode;
        }

        if (index === this.length - 1){ //if index is 1 before the last node, then we are inserting before the last node
            newNode.next = this.tail;
            let currentNode = this.head;
            while(currentNode.next !== this.tail){
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            this.length++;
            return newNode;
        }

        if (index === 1){ //if index is 1, then we are inserting after the head node
            newNode.next = this.head.next;
            this.head.next = newNode;
            this.length++;
            return newNode;
        }

        //if we reach here, then we are inserting somewhere in the middle of the list
        let currentNode = this.head;
        let previousNode = this.head;
        let currentIndex = 0;
        while(currentNode.next !== null){
            if(currentIndex === index){
                newNode.next = currentNode;
                previousNode.next = newNode;
                this.length++;
                return newNode;
            }
            else{
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }

    removeAt(index){
        if (index < 0 || index > this.length){ //invalid index
            return null;
        }
        if (index === 0){ //we are removing the head node
            this.head = this.head.next;
            this.length--;
            return this.head;
        }
        if (index === this.length - 1){ //we are removing the tail node
            this.pop();
            return this.tail;
        }
        let currentNode = this.head;
        let previousNode = this.head;
        let currentIndex = 0;
        while(currentNode.next !== null){
            if(currentIndex === index){
                previousNode.next  = currentNode.next;
                this.length--;
                return currentNode;
            }
            else{
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }
}

const myLinkedUpList = new LinkedList();

//testing
myLinkedUpList.append(1);
myLinkedUpList.append(2);
myLinkedUpList.append(3);
myLinkedUpList.append(4);
myLinkedUpList.append(5);
myLinkedUpList.append(6);
console.log(myLinkedUpList.toString());
myLinkedUpList.prepend(0);
console.log(myLinkedUpList.toString());
myLinkedUpList.append(7);
console.log(myLinkedUpList.toString());
myLinkedUpList.pop();
console.log(myLinkedUpList.toString());
console.log(myLinkedUpList.contains(3));
console.log(myLinkedUpList.contains(8));
console.log(myLinkedUpList.getTail());
console.log(myLinkedUpList.getHead());
console.log(myLinkedUpList.at(2)); 
console.log(myLinkedUpList.find(4));
console.log(myLinkedUpList.toString());
myLinkedUpList.insertAt(8, 4);
console.log(myLinkedUpList.toString());
myLinkedUpList.insertAt(0, 0);
myLinkedUpList.insertAt(9, 9);
console.log(myLinkedUpList.toString());
myLinkedUpList.removeAt(4);
console.log(myLinkedUpList.toString());




