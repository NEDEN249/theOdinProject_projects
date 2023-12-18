function sumRange(num){
  if (num == 1){
    return 1
  }
  return num + sumRange(num - 1);
}

sumRange(4);

function power(base, exponent){
  if (exponent == 0) return 1;
  return base * power(base, exponent-1);
}

power(2, 4);

function factorial(num){
  if (num == 1) return 1;
  return num * factorial(num - 1);
}

factorial(5);

function all(arr, callback){
    let copy = [...arr]; //shallow copy
    if (copy.length === 0) return true; //we have reached the end of the array (all numbers less than 7)
    
    if(callback(copy[0])){ //run the callback on the first element in the array -> if true we shift to the next element and call all again (recursive) 
      copy.shift();
      return all(copy, callback);
    } else { //unless copy[0] was more than 7 than we just return false and break the recursion (the base case)
      return false;
    }
}

let allAreLessThanSeven = all([1, 2, 9], function(num){ //a variable that stores a function call to all and a function within itself, this function is actually the second parameter for all
  return num < 7
});
console.log(allAreLessThanSeven);

function productOfArray(arr){
  if (arr.length === 0) return 1;
  return arr.shift() * productOfArray(arr);
}

productOfArray([1, 2, 3, 10]);

function contains(obj, value){
  for (let key in obj){
    if (typeof obj[key] == 'object'){
      return contains(obj[key], value);
    }
    if (obj[key] === value){
      return true;
    }
  }
  return false; //never found it
}
let nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
console.log(hasIt);
console.log(doesntHaveIt);

function totalIntegers(arr){
  if (arr.length === 0) return 0;
  let sum = 0;
  let first = arr.shift();
  if(Array.isArray(first)){
    sum += totalIntegers(first);
  }
  else if (typeof first === "number"){
    sum +=1
  }
  return sum + totalIntegers(arr);
}

let seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]);
console.log(seven);

function sumSquares(array){
	if(array.length === 0) return 0;
	let total = 0;

	for(let i = 0; i < array.length; i++){
		if(Array.isArray(array[i])){
			total += sumSquares(array[i]);
		} else {
			total += array[i] * array[i];
		}
		
	}
	return total;
}

sumSquares([1, 2, 3]);

function replicate(reps, num){
  if (reps <= 0){ 
    return [];
  }
  return [num].concat(replicate(reps-1, num)) //create an array containing num, then concatenate the recursive function until reps = 0
}

replicate(3, 5);


function fibs(num){
    let arr = [0];
    let curr = 1;
    let prev = 0;
    let temp;
    for (let i = 0; i <= num-2; i++){
      arr.push(curr);
      temp = curr;
      curr = curr + prev;
      prev = temp;
    }
    return arr;
  }
  
  fibs(8);
  
  function figs(num){
    if (num === 1) return[0]; //if 1 is passed in 
    if (num === 2) return [0,1]; //otherwise this is the base case (first 2 values should be 0 and 1)
    
    return[
        ...figs(num-1), figs(num-1)[num-2] + figs(num-1)[num-3]
    ];
  }
  
  figs(8);
  
  function merge(left, right){
    let arr = [] //create empty array
    console.log(left[0], right[0]);
    while (left.length && right.length){ //while left and right aren't empty
      if (left[0] < right[0]){ //take the smallest value and push it into arr
        //keep in mind shift removes the first element from an array and returns it
        //this means push is appending the first element in left removing it from left
        arr.push(left.shift())
      } else {
        arr.push(right.shift()); //vice versa
      }
    }
    return [...arr, ...left, ...right]; //we then return an array containing the sorted (smallest) elements to the left most of the array and the unsorted (largest) elements to the right most of the array
  }
  
  function mergeSort(array) {
    half = array.length/2; //divide array by 2 and save it as the mid point
    
    if(array.length < 2){ //this means we have finished sorting 
      return array;
    }
    const left = array.splice(0, half); //cut the array in half and save the left side to this variable
    return merge(mergeSort(left), mergeSort(array)); //LHS = left half, RHS = right half
  }
  
  mergeSort([4, 6, 7, 2, 5, 9, 9, 3, 3, 3])

  function biFindSwitch(array, value, start=0, end=(array.length-1)){
  
    let midPoint = Math.floor(((end-start)/2)+start);
    
    switch(true){
      case (array[midPoint] === value):
        return true;
      case (end - start === 0):
        return false;
      case (array[midPoint] < value):
        return biFindSwitch(array, value, midPoint+1, end);
      case (array[midPoint] > value):
        return biFindSwitch(array, value, start, midPoint);
    }
  }
  
  
  function biFindIf(array, value, start=0, end=(array.length-1)){
    
    let midPoint = Math.floor(((end-start)/2)+start);
  
    if (array[midPoint] === value){
        return true;
    } else if (end - start === 0){
        return false;
    } else if (array[midPoint] < value) {
        return biFindIf(array, value, midPoint+1, end);
    } else {
        return biFindIf(array, value, start, midPoint);
    }
  }
  
  //how binary search works
  //midPoint = ((highest index - lowest index) / 2) + lowest index <-- rounded down
  //example ((10-1)/2)+1 = 5.5 <--- 5
  //if midPoint is smaller than value we recursively call with array[midPoint+1, highest index]
  //else if midPoint is larger than value we recursively call with array[smallest index, midPoint]
  //if the value matches midPoint we return true (it has been found)
  //if end - start === 0, we have exhausted the array (value doesn't exist)
  
  
  //console.log(biFindSwitch(array, 8));
  //console.log(biFindIf(array, 8));
  
  const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E'],
  };
  
  function createNode(value, left = null, right = null) {
    return { value, left, right };
  }
  
  const tree = createNode(1,
    createNode(2,
      createNode(4),
      createNode(5)
    ),
    createNode(3,
      createNode(6),
      createNode(7)
    )
  );
  
  function bfs(node){
    if(!node){ //invalid input
      return [];
    }
    //remember node contains the entire tree
    
    const queue = [node]; //push the root node onto the queue to be processed 
    const result = []; //will contain the full set of nodes
    
    while(queue.length) { //while the queue is not empty 
      const current = queue.shift(); //move to the next node;
      result.push(current.value); //move the current node into results
      
      if(current.left){ //if the current node has a left child -> push this child onto the queue to be processed
        queue.push(current.left);
      }
      
      if (current.right){ //if the current node has a right child -> push this child onto the queue to be processed
        queue.push(current.right);
      }
    }
    return result;
  }
  //essentially
  //check if not a node -> return empty array
  //create a queue with the root node in it (the argument)
  //create a results array (empty)
  //while queue is not empty (of length 0)
  //current = next node in queue/dequeue -> done in one step via .shift()
  //push current into results
  //if current has a left subtree -> enqueue it
  //if current has a right subtree -> enqueue it
  //finally return results array
  
  bfs(tree);
  
  function dfs(node){
    if (!node){
      return [];
    }
    const stack = [node]; //add root node to stack
    const result = [];
    while(stack.length > 0){
      const current = stack.pop(); //remove the root node off the stack and push it into results
      result.push(current.value);
     
      if (current.right){ //if the root node right subtree push it onto the stack
        stack.push(current.right);
      }
  
      if(current.left){ //repeat
        stack.push(current.left);
      }
    }
    return result;
  }
  
  dfs(tree);