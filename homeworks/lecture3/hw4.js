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

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getPerimeter = function() {
    // add three sides
    return this.a + this.b + this.c;
}

Triangle.prototype.getArea = function() {
    // Heron's formula
    const s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
}


function Circle(radius) {
    this.type = "circle";
    this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getArea = function() {
    // pi * radius ^ 2
    return Math.PI * this.radius ** 2;
}

Circle.prototype.getCircumference = function() {
    // 2 * pi * radius
    return 2 * Math.PI * this.radius;
}


// your code goes here
// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

// 6. change all code above to use ES6 class syntax

class Shape {
    constructor() {
        this.type = 'shape';
    }

    getType() {
        return this.type;
    }
}

class Triangle extends Shape {
    constructor(a, b, c) {
        super();
        this.type = 'triangle';
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        // add three sides
        return this.a + this.b + this.c;
    }

    getArea() {
        // Heron's formula
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.type = 'circle';
        this.radius = radius;
    }

    getArea() {
        // pi * radius ^ 2
        return Math.PI * this.radius ** 2;
    }

    getCircumference() {
        // 2 * pi * radius
        return 2 * Math.PI * this.radius;
    }
}