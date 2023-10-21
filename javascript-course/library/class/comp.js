class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name; 
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("John"); // uses the constructor, CONSTRUCTS the INITIAL VALUES of USER (INITIALISER)
  alert(user.name); // John, uses the getter that is, GETS the VALUES of USER (IDENTIFIER)
  user = new User(""); // Name is too short., uses the SETTER that is, SETS the VALUES of USER (MODIFIER)

  class Button { // defeats the issue of 'losing this'-> each button object has it's own function with 'this' referencing that specific button object
    constructor(value) {
      this.value = value;
    }
    click = () => {
      alert(this.value);
    }
  }
  
  let button = new Button("hello");
  
  setTimeout(button.click, 1000); // hello

//general class syntax

//   class MyClass {
//     prop = value; // property
  
//     constructor(...) { // constructor
//       // ...
//     }
  
//     method(...) {} // method
  
//     get something(...) {} // getter method
//     set something(...) {} // setter method
  
//     [Symbol.iterator]() {} // method with computed name (symbol here)
//     // ...
//   }
//MyClass is technically a function (the one that we provide as constructor), while methods, getters and setters are written to MyClass.prototype.

//composition example -> pattern where you define things based off WHAT they DO as opposed to WHAT they ARE

const barker = (state) => ({
    bark: () => console.log('Woof, I am ' + state.name)
})

const driver = (state) => ({
    drive: () => state.position = state.position + state.speed
})

barker({name: 'karo'}).bark()

//now we can create a function that creates an object with the properties of barker and driver

const murderRobotDog = (name) => {
    let state = {
        name,
        speed: 100,
        position: 0
    }
    return Object.assign( //takes an object, that empty object at line 79 and assigns the other objects into that empty object, that is assign the barker object into the empty object and then assign the driver object into the empty object
        {},
        barker(state), //merges a barker object into the empty object -> now creating a murderRobotDog means you have a barker object an a driver object within that murdeRobotDog object 
        driver(state)
    )
}

murderRobotDog('sniffles').bark() //woof I am sniffles