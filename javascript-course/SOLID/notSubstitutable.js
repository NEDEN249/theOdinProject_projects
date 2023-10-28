// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     setWidth(width){
//         this.width = width;
//     }

//     setHeight(height){
//         this.height = height;
//     }

//     area(){
//         return this.width * this.height;
//     }
// }

// class Square extends Rectangle{
//     setWidth(width){
//         this.width = width;
//         this.height = width;
//     }

//     setHeight(height){
//         this.width = height;
//         this.height = height;
//     }

//     area(){
//         return this.width * this.height;
//     }
// }

// function increaseRectangleWidth(rectangle){
//     rectangle.setWidth(rectangle.width + 1);
// }

// const rectangle1 = new Rectangle(10, 2);
// const square1 = new Square(5, 5);

// increaseRectangleWidth(rectangle1);
// increaseRectangleWidth(square1); //increases both width and height since in square height = width -> but the function intends to increase ONLY width -> therefore because it doesn't work it breaks liskov principle
// //our subclass of square is NOT compatible with the functions of the parent class rectangle -> liskov principle requires that functions ARE compatible with all subclasses

// console.log(rectangle1.area());
// console.log(square1.area());
// we should have a class 'shape' that both rectangle and square inherit from instead


class Bird {
    fly(){
        console.log('I Can Fly');
    }
}

class Duck extends Bird{
    quack(){
        console.log('I can Quack');
    }
}

class Penguin extends Bird {
    fly(){
        throw new Error('Cannot Fly');
    }

    swim(){
        console.log('I can Swim');
    }
}

function makeBirdsFly(bird){
    bird.fly();
}

const duck = new Duck();
const penguin = new Penguin();
//see how the function of the parent class is not compatible with the subclass -> violates liskov principle
//penguins can't fly -> therefore the function makeBirdsFly is not compatible with the subclass penguin
//although it does work with Duck -> this one does pass