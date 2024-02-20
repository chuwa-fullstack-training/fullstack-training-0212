function Person(name) {
  this.name = name;
  this.sayName = () => {
    console.log(this.name);
  };
  // this.sayName = function () {
  //   console.log(this.name);
  // };
}

const person = new Person('Aaron');
person.sayName(); // Aaron

const sayPersonName = person.sayName;
sayPersonName(); // undefined
sayPersonName.call(person); // Aaron

const another = new Person('Alex');
sayPersonName.call(another); // Alex

// Aaron
// undefined
// Aaron
// Alex

// change this.sayName to arrow function

// Aaron
// Aaron
// Aaron
// Aaron