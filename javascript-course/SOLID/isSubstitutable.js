class FlyingBird {
    fly(){
        console.log('I Can Fly');
    }
}

class Duck extends FlyingBird{
    quack(){
        console.log('I can Quack');
    }
}

class SwimmingBird{
    swim(){
        console.log('I can Swim');
    }
}

class Penguin extends SwimmingBird {
}

function makeFlyingBirdFly(bird){
    bird.fly();
}

function makeSwimmingBirdFly(bird){
    bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck); 
makeSwimmingBirdFly(penguin);

//this code now DOES pass the liskov principle 
    //-> we have a class 'bird' that both flying and swimming birds inherit from -> the functions are compatible with all subclasses 
    //-> we can pass a flying bird to a function that expects a bird and a swimming bird to a function that expects a bird -> the functions are substitutable
//although composition would work better here 

//essentially if you have a function that accepts a class, every single sub class of that class should be able to be passed into that function and it should work as expected