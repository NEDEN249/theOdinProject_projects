// Initialize constructor functions for the objects
function Hero(name, level) {
    this.name = name;
    this.level = level;
  }
  
  function Warrior(name, level, weapon) {
    Hero.call(this, name, level);
  
    this.weapon = weapon;
  }
  
  function Healer(name, level, spell) {
    Hero.call(this, name, level);
  
    this.spell = spell;
  }
  
  // Link prototypes and add prototype methods, without this, the prototype chain will be broken hence we cannot use the methods from the parent class (Hero) constructor
  //for example hero1 which is an instance of Warrior cannot use the greet method from Hero without this Object.setPrototypeOf method
  Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
  Object.setPrototypeOf(Healer.prototype, Hero.prototype);
  

  // Adding prototype methods which will be shared by all instances of the constructor functions via the prototype chain (inheritance) as seen above 
  Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
  }
  
  Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}.`;
  }
  
  Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
  }
  
  // Initialize individual character instances
  const hero1 = new Warrior('Bjorn', 1, 'axe');
  const hero2 = new Healer('Kanin', 1, 'cure');