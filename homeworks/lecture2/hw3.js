// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// Numbers are stored in binary format that can't exactly represent 0.1 or 0.2

console.log(0.1 + 0.2 == 0.3);
// false
// Floating-point precision error 
// Math.abs((0.1 + 0.2) - 0.3) < Numbers.EPSILON  ==> true

console.log(1 + "2" + "2");
// "122"
// Type coercion rule 1: 
// when a numeric value is concatenated with a string, JS converts the number to a string


console.log(1 + +"2" + "2");
// "32"
// Type coercion rule 2: 
// when a string is involved in an arithmetic operation, JS converts the string to a number
// +"2" becomes 2, 1 + 2 becomes 3, 3 + "2" becomes "32"

console.log(1 + -"1" + "2");
// "02"
// -"1" becomes -1, 1 - 1 becomes 0, 0 + "2" becomes "02"

console.log(+"1" + "1" + "2");
// "112"
// +"1" becomes 1, concatenated with "12"

console.log("A" - "B" + "2");
// "NaN2"
// "A" - "B" results in NaN, concatenated with "2"

console.log("A" - "B" + 2);
// "NaN"
// Any arithmetic operation involving NaN and other numbers result in NaN

console.log("0 || 1 = " + (0 || 1));
// "0 || 1 = 1"
// 0 || 1 results in 1

console.log("1 || 2 = " + (1 || 2));
// "1 || 2 = 1" 
// 1 || 2 result in 1

console.log("0 && 1 = " + (0 && 1));
// "0 && 1 = 0"
// 0 && 1 results in 0

console.log("1 && 2 = " + (1 && 2));
// "1 && 2 = 2"
// 1 && 2 results in 2

console.log(false == '0')
// true
// false is coerced to '0' when comparing with a string

console.log(false === '0')
// false
// strictly check value and type without coercion