// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// the result is 0.30000000000000004, this is a floating-point numbers operation that cannot 
// be represented in a good format in JavaScript, so leading to small rounding errors

console.log(0.1 + 0.2 == 0.3);
// the result is false, because fo the floating-point operation error, the 0.1 + 0.2 not strictly equals to 
// 0.3, therefore the result will be false

console.log(1 +  "2" + "2");
// the result will be string "122", because In JavaScript, when you try to add a number and a string,
// the number is coerced into a string and then concatenated

console.log(1 +  +"2" + "2");
// the result is string "32", the "+" before the second 2 will convert the string "2" into a number, so 1 + 2
// equals to 3, and then follows a string, it will convert the number 3 into string "3" and concatenate with
// "2" leading to "32"

console.log(1 +  -"1" + "2");
// the result is string "02", because the "-" before the second 2 will convert the "-1" into numerical -1, then
// operates with 1 to 0 then concatenate with "2" becoming string "02"

console.log(+"1" +  "1" + "2");
// the result is string "112", "+" makes the "1" into numerical 1, then concatenate with string "1" and "2" then
// becomes "112"

console.log( "A" - "B" + "2");
// the result will be "NaN2", because in JavaScript, two string cannot be performed well in a meaningful way
// with substraction, so it results in "NaN"(not a number) then concatenate with the string "2" 

console.log( "A" - "B" + 2);
// the result is "NaN", the result after "A" - "B" is "NaN", then it operates with number 2 resulting in "NaN" too

console.log("0 || 1 = "+(0 || 1));
// the result is "0 || 1 = 1", because the right part of this code will be 1, then concatenates with the
// string "0 || 1 = "

console.log("1 || 2 = "+(1 || 2));
// the result is "1 || 2 = 1", because in JavaScript, number 1 will be considered as true, so in "OR" operation
// it will only evaluate the first true part and returns it

console.log("0 && 1 = "+(0 && 1));
// the result is "0 && 1 = 0 ", because for the right part, the 0 means false, 1 means true in JavaScript
// then after the operation "&&", it will become false and return 0

console.log("1 && 2 = "+(1 && 2));
// the result is "1 && 2 = 2", because in JavaScript, for the "&&" operation, it will evaluate all the expressions
// and return the first falsy value it encounters, but if all the values are truthy, it will return the last
// value, so the (1 && 2) leading to 2

console.log(false == '0')
// the result is true, because the "==" in JavaScript will convert the values to a common type before comparing them, 
// then '0' will be 0 which means false in JavaScript, so the equation is true

console.log(false === '0')
// the result is false, because the "===" means it will execute the expressions taking types of values into consideration
// so the false is a boolean value, and '0' is a string value