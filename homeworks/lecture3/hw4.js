function Shape() {
    this.type = 'shape';
}

Shape.prototype.getType = function() {
    return this.type;
}

function Triangle(a, b, c) {
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
}

// Triangle.prototype = Object.create(Shape.prototype);
// Triangle.prototype.constructor = Triangle;

// your code goes here
// 1. implement a method getPerimeter for Triangle class
Triangle.prototype.getPerimeter = function() {
    return (this.a + this.b + this.c);
}
const tri = new Triangle(4, 4, 4);
console.log(tri.getPerimeter());
// 2. implement a method getArea for Triangle class
Triangle.prototype.getArea = function() {
    let s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s-this.a) * (s-this.b) * (s-this.c));
}
console.log(tri.getArea());
// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI*Math.pow(this.radius, 2);
    }
    cicumference() {
        return 2 * Math.PI * this.radius;
    }
}

// let c = new Circle(3);
// console.log(c.cicumference());

// 6. change all code above to use ES6 class syntax
// For circle, it's already in ES6 syntax. So I will just modify Triangle and Shape
class Shape_ES6 {
    constructor() {
        this.type = 'shape';
    }
    getType() {
        return this.type;
    }
}

class Triangle_ES6 extends Shape_ES6{
    constructor(a, b, c) {
        super();
        this.type = 'triangle';
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter() {
        return (this.a + this.b + this.c);
    }
    getArea() {
        let s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s-this.a) * (s-this.b) * (s-this.c));
    }
}
let t = new Triangle_ES6(4, 4, 4);
console.log(t.getPerimeter());
console.log(t.getArea());