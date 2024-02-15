// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// Output 0.3
// 0.1 + 0.2 = 0.3

console.log(0.1 + 0.2 == 0.3);
// Output true
// 0.3 == 0.3 is true

console.log(1 +  "2" + "2");
// Output 122
// 1 is concatenated with two 2's

console.log(1 +  +"2" + "2");
// Output 32
// +2 is converted to number, 1 + 2 = 3, 3 concatenated with 2

console.log(1 +  -"1" + "2");
// Output 02
// -1 is converted to number, 1 - 1 = 0, 0 concatenated with 2

console.log(+"1" +  "1" + "2");
// Output 112
// +1 is converted to number, then concatenated with 1 2

console.log( "A" - "B" + "2");
// Output NaN2
// "A" - "B" is not a number, then concatenated with 2

console.log( "A" - "B" + 2);
// Output NaN
// "A" - "B" is not a number, plus 2 is also not a number

console.log("0 || 1 = "+(0 || 1));
// Output "0 || 1 = 1"
// 0 || 1 evaluates to 1, then concatenated with the first half

console.log("1 || 2 = "+(1 || 2));
// Output "1 || 2 = 1"
// 1 || 2 evaluates to 1, then concatenated with the first half

console.log("0 && 1 = "+(0 && 1));
// Output "0 && 1 = 0"
// 0 && 1 evaluates to 0, then concatenated with the first half

console.log("1 && 2 = "+(1 && 2));
// Output "1 && 2 = 1"
// 1 && 2 evaluates to 1, then concatenated with the first half

console.log(false == '0')
// Output true
// '0' is converted to 0, false == 0

console.log(false === '0')
// Output false
// The types are different
