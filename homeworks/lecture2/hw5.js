var x;

if (x !== 3) {
  console.log(y); //undefined 
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y); // 5
}
if (x === 3) {
  console.log(y); // 5
}

// "The variable y is initially undefined because, due to hoisting,
//  y is declared before the code is executed but not yet assigned any value.
//   Once the execution reaches y = 5, y is assigned the value 5, and from that point onwards, the value of y will be 5.

var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x); // 2
}
console.log(x); // 2

// the first x = 2 : just print var x value
// the second x = 2: because of hoisting, you declare a variable 
// anywhere within a function, it is as if it was declared at the top of the function.
