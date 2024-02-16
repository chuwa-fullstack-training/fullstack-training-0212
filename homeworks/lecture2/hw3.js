// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// In JavaScript, the floating number is expressed in binary, some of them can not be presented precisely in binary whcih will lead some tounding errors.

console.log(0.1 + 0.2 == 0.3);
// false
// From the result of previous problem, the small rounding error leads to inequility of the formula. 

console.log(1 +  "2" + "2");
// 122
// When adding 2 items with different types, JavaScript will automatically convert both items into string, then add. 
// So the formula is converted to "1" + "2" + "2", which equals to "122"

console.log(1 +  +"2" + "2");
// 32
// In Javascript, when we put a + in front of a string, it will convert this string to number at first, so +"2" becomes +2, whcih is just 2
// Then the process becomes 1+2+"2" = 3+"2", 3 is converted to string as discussed in previous question, "3"+"2"="32"

console.log(1 +  -"1" + "2");
// 02
// The additional operator "-" will convert "1" to number 1, so -"1" becomes -1, 1+(-1)=0
// Then 0 is adding with "2", so the result is "02"

console.log(+"1" +  "1" + "2");
// 112
// +"1" becomes +1, +1 + "1" = "11", "11"+"2" = "112"

console.log( "A" - "B" + "2");
// NaN2
// Subtraction only take effect between 2 numbers, "A" - "B" will leads to NaN
// NaN+"2" = "NaN2" as "2" is a string, NaN will be converted to a string

console.log( "A" - "B" + 2);
// NaN
// "A" - "B" = NaN
// NaN plus a number is also NaN

console.log("0 || 1 = "+(0 || 1));
// 0 || 1 = 1
// The first part "0 || 1 =" remain as a string
// The second part (0 || 1) is a logical "OR" operation, where 0 || 1 is 1
// With the plus operation, the formula will be "0 || 1=" + 1, the number 1 will be converted to a string, so the result is "0 ||1 = 1"

console.log("1 || 2 = "+(1 || 2));
// 1 || 2 = 1
// The first part is the same as the previous question
// For the second part, both 1 as treated as "true" in logical operation, (true || var) will always return true, whcih is 1
// Same as the previous question, the formula becomes "1 || 2 = "+1, the resultnis 1 || 2 = 1

console.log("0 && 1 = "+(0 && 1));
// 0 && 1 = 0
// "&&" is an "AND" logical operator, 0 is treated false, (false && var) will always return false, whcih is 0
// The formula becomes "0 && 1 =" +0, the result is 0 && 1 = 0

console.log("1 && 2 = "+(1 && 2));
// 1 && 2 = 2
// 1 means true, (true && var) return var, so (1 && 2)=2
// The formula becomes "1 && 2 =" + 2, the result is 1 && 2 = 2

console.log(false == '0')
// true
// For this comparison, 2 sides have different types, "==" will convert 2 sides into a common type. 
// In this case, false will be converted to 0, so the comparison result is true

console.log(false === '0')
// false
// "===" reparesented strict equality operator, in comparison , it will check data type on both side. 
// As the data type of false and '0' are different, it returns false. 
