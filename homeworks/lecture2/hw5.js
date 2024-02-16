// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y);
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);
}
if (x === 3) {
  console.log(y);
}
/*Answer: 
First console.log(): by hoisting mechanism var y declaration will be moved to the top of the scope, so y is currenly undefine
Second console.log(): 5
Third console.log(): 5
*/
// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);
/*Answer: 
First console.log(): 2
Second console.log(): 2
*/
