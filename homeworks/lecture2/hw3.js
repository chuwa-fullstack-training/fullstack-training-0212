// What would be the output of following code?
// Explain your answer.
// test2

console.log(0.1 + 0.2);
// 0.30000000000000004
// this a double value which cannot be accurately 0.3

console.log(0.1 + 0.2 == 0.3);
// false
// this a double value which cannot be accurately 0.3

console.log(1 +  "2" + "2");
// 122

console.log(1 +  +"2" + "2");
// 32
// the (+"2") is the unary plus operator, which converts the string "2" into the number 2. So, you get 1 + 2, which equals 3.

console.log(1 +  -"1" + "2");
// 02

console.log(+"1" +  "1" + "2");
// 112

console.log( "A" - "B" + "2");
// NaN2
// "-" is tring to convert "A" and "B" to numbers. They are not. so res is NaN.

console.log( "A" - "B" + 2);
// NaN
// any arithmetic operation involving NaN with a number results in NaN, 

console.log("0 || 1 = "+(0 || 1));
// 0 || 1 = 1

console.log("1 || 2 = "+(1 || 2));
// 1 || 2 = 1

console.log("0 && 1 = "+(0 && 1));
// 0 && 1 = 0

console.log("1 && 2 = "+(1 && 2));
// 1 && 2 = 2
// 1 is true and 2 is true. && returns the second operand.

console.log(false == '0')
// true

console.log(false === '0')
// false
// val types are different
