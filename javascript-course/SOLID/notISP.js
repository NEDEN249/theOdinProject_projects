class Entity {
    constructor(name, attackDamage, health){
        this.name = name;
        this.attackDamage = attackDamage;
        this.health = health;
    }

    move(){
        console.log(`${this.name} moved`);
    }

    attack(targetEntity){
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`);
        targetEntity.takeDamage(this.attackDamage);
    }

    takeDamage(amount){
        this.health -= amount;
        console.log(`${this.name} has ${this.health} health remaining`);
    }
}

class Character extends Entity{
    constructor(name, weapon, attackDamage, health){
        super(name, attackDamage, health);
        this.weapon = weapon;
    }

    attack(targetEntity){
        console.log(`${this.name} attacked ${targetEntity.name} with ${this.weapon} for ${this.attackDamage} damage`);
        targetEntity.takeDamage(this.attackDamage);
    }
}

class Wall extends Entity{
    constructor(name, health){
        super(name, 0, health);
    }

    move(){
        return null;
    }

    attack(){
        return null;
    }
}

class Turret extends Entity{
    constructor(name, attackDamage){
        super(name, attackDamage, -1);
    }

    move(){
        return null;
    }

    takeDamage(){
        return null;
    }
}

//not everything was able to use all of the functions in the interface (although this is a class in JS)
//this is because not everything is an entity -> not everything can move, attack, take damage etc

