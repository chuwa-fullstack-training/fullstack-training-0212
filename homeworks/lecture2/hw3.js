// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004,
// The IEEE 754 standard for floating-point arithmetic is used,
// which can lead to small inaccuracies in calculations involving decimal numbers

console.log(0.1 + 0.2 == 0.3);
// false

console.log(1 + "2" + "2");
// "122", js automatically converts number to string when a number try to add a character

console.log(1 + +"2" + "2");
// "32", +"2" is converted to 2, so 1 + 2 = 3, and 3 + "2" = "32" becauase 3 is converted to string

console.log(1 + -"1" + "2");
// "02", -"1" is converted to -1, so 1 + -1 = 0, and 0 + "2" = "02"

console.log(+"1" + "1" + "2");
// "112", +"1" is converted to 1, so 1 + "1" = "11", and "11" + "2" = "112"

console.log("A" - "B" + "2");
// NaN2, "A" - "B" is NaN, and NaN + "2" = "NaN2" because NaN is converted to string

console.log("A" - "B" + 2);
// NaN, "A" - "B" is NaN, and NaN add any number is NaN

console.log("0 || 1 = " + (0 || 1));
// 0 || 1 = 1

console.log("1 || 2 = " + (1 || 2));
// 1 || 2 = 1

console.log("0 && 1 = " + (0 && 1));
// 0 && 1 = 0

console.log("1 && 2 = " + (1 && 2));
// 1 && 2 = 2

console.log(false == "0");
// true, beacuse false and "0" are all falsy and == does not compare the type of variable

console.log(false === "0");
// false. because false is a Boolean, and "0" is a string
