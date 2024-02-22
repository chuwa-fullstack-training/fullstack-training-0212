// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.3

console.log(0.1 + 0.2 == 0.3);
// same type and same value

console.log(1 + "2" + "2");
// 122
// 1 will be concatenated into the string

console.log(1 + +"2" + "2");
// 32
// +"2" will be converted to 2 and then concatenated with "2"

console.log(1 + -"1" + "2");
// 02
// -"1" will be converted to -1 and then concatenated with "2"

console.log(+"1" + "1" + "2");
// 112
// +"1" will be converted to 1 and then concatenated with "1" and "2"

console.log("A" - "B" + "2");
// NaN2
// "A" - "B" is not a number and will return "NaN", then concatenated with “2”

console.log("A" - "B" + 2);
// NaN
// "A" - "B" is not a number and will return "NaN", then plus a number is still NaN

console.log("0 || 1 = " + (0 || 1));
// 0 || 1 = 1
// 0 || 1 is 1 and concatenated with "0 || 1 = "

console.log("1 || 2 = " + (1 || 2));
// 1 || 2 = 1
// 1 || 2 is 1 and concatenated with "1 || 2 = "

console.log("0 && 1 = " + (0 && 1));
// 0 && 1 = 0
// 0 && 1 is 0 and concatenated with "0 && 1 = "

console.log("1 && 2 = " + (1 && 2));
// 1 && 2 = 2
// 1 && 2 is 2 and concatenated with "1 && 2 = "

console.log(false == "0");
// true
// Loose comparison will convert the type first, so false == 0;

console.log(false === "0");
// false
// strict comparison, will not convert type first.
