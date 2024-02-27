function Shape() {
    this.type = 'shape';
}

Shape.prototype.getType = function() {
    return this.type;
}
/*
function Triangle(a, b, c) {
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;
*/
class Triangle extends Shape
{
    constructor(a,b,c)
    {
        super()
        this.type = 'triangle';
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

// your code goes here
// 1. implement a method getPerimeter for Triangle class
function getPerimeter() {
    return this.a + this.b + this.c;
}
Triangle.prototype.getPerimeter = getPerimeter
// 2. implement a method getArea for Triangle class
function getArea() {
    //Heron's formula
    let semiPerimeter = this.getPerimeter() / 2;
    return Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter- this.c))
}
Triangle.prototype.getArea = getArea
let t1 = new Triangle(1.5,2,3)
console.log(t1.getPerimeter())
console.log(t1.getArea())

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
class Circle extends Shape
{
    constructor(radius)
    {
        super()
        this.radius = radius
    }
    // 4. implement a method area for Circle class
    area()
    {
        return this.radius * this.radius * Math.PI;
    }
    // 5. implement a method circumference for Circle class
    circumference()
    {
        return this.radius * 2 * Math.PI
    }
}
var c1 = new Circle(3)
console.log(c1.area())
console.log(c1.circumference())




// 6. change all code above to use ES6 class syntax