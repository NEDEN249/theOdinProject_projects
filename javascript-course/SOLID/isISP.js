class Entity{ //the entity
    constructor(name){
        this.name = name;
    }
}


//a bunch of components that each subclass of entity can use if it wishes to by adding them to the class hierarchy (PROTOTYPE CHAIN)
const mover = {
    move(){
        console.log(`${this.name} moved`);
    }
};

const attacker = {
    attack(targetEntity){
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`);
        targetEntity.takeDamage(this.attackDamage);
    }
};

const hasHealth = {
    takeDamage(amount){
        this.health -= amount;
        console.log(`${this.name} has ${this.health} health remaining`);
    }
};

class Character extends Entity{
    constructor(name, weapon, attackDamage, health){
        super(name);
        this.weapon = weapon;
        this.attackDamage = attackDamage;
        this.health = health;
    }
}

Object.assign(Character.prototype, mover);
Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, hasHealth);

class Wall extends Entity{
    constructor(name, health){
        super(name);
        this.health = health;
    }
}

Object.assign(Wall.prototype, hasHealth);

class Turret extends Entity{
    constructor(name, attackDamage){
        super(name);
        this.attackDamage = attackDamage;
    }
}

Object.assign(Turret.prototype, attacker);

const turret = new Turret('Turret', 5);
const character = new Character('Character', 15, 100);
const wall = new Wall('Wall', 200);

turret.attack(character);
character.move();
character.attack(wall);

//basically we have a bunch of components that we can add to our classes if we want to -> we can add them to the prototype chain of our classes
//this means that our big classes have been broken up into smaller classes that are more reusable and more flexible
//eg we no longer have the turrent extending entity -> instead we have the turret class and we add the attacker component to it as before it meant that turret inherits the move functionality even though it should not be able to move 
//so if we have a function that only some of these subclasses should be using we should do it like the example above so that only the classes that need a specific function have access to those specific functions vice versa 