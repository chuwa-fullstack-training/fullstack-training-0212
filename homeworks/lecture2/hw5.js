// Hoisting

// 1.
var x;

if (x !== 3) { // x = undefined, thus true
  console.log(y); // undefined, y hoisted but not yet assigned
  var y = 5; // y hoisted to the top of y's scope, which is global scope
  if (y === 5) { // true
    var x = 3; // hoisted to the top of x's scope, which is global scope
  }
  console.log(y); // 5
}
if (x === 3) {
  console.log(y); // 5
}


// 2.
var x = 3;
if (x === 3) { // true
  var x = 2; // x hosted to the top of scope, access from anywhere; redeclare and reassign value: 2 to x
  console.log(x); // 2
}
console.log(x); // 2

