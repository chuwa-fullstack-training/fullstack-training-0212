// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
/**
 * 0.30000000000000004, because it would be adding two float numbers,
 * float numbers are approximations and can't always present decimal numbers precisely
 * */
console.log(0.1 + 0.2 == 0.3);
/**
 * false
 * cause 0.1+0.2 in javascript is a float number which wouldn't be precisely 0.3
 */
console.log(1 +  "2" + "2");
/**
 * "122"
 * because of type coercion in javascript. When using "+" operator to a number and
 * a string, the number would be coercied into a string, and then they would
 * be concatenated together into "122"
 */
console.log(1 +  +"2" + "2");
/**
 * "32"
 * the middle +"2", operator "+" would coerce string "2" into a number 2,
 * so there would first be an addition of 1 + 2 result in number 3,
 * and then in 3+"2",number 3 would be coerced into string, then concatenated
 * with "2", thus result is "32"
 */
console.log(1 +  -"1" + "2");
/**
 * "02"
 * same thing above, performing calculation 1-1=0,
 * then 0 being coerced and then concatenated with string 2, result into "02"
 */
console.log(+"1" +  "1" + "2");
/**
 * "112"
 * the first string "1" would be coerced into number by operator "+", however 
 * the last two are all strings, so number 1 would then be coerced into string "1",
 * then result in concatenation of strings, "112"
 */
console.log( "A" - "B" + "2");
/**
 * "NaN2"
 * when performing substraction on strings, javascript would first try to convert string
 * into numbers, however "A" and "B" can't be converted to numbers directly, result "NaN".
 * Then "NaN" concatenated with "2", result is "NaN2"
 */
console.log( "A" - "B" + 2);
/**
 * "NaN"
 * "A"-"B" is "NaN", then it turned into "NaN"+2,
 * since any arithmetic operation on "NaN" yields "NaN", so result is "NaN"
 */
console.log("0 || 1 = "+(0 || 1));
/**
 * "0 || 1 = 1"
 * (0 || 1) would yields 1, since OR operator returns the value of the first operand
 * if it evaluates to true, otherwise it returns the value of the seconde operand, 
 * in this case, 1, the "0 || 1 = " would concatenated with 1(which is coerced into string)
 */
console.log("1 || 2 = "+(1 || 2));
/**
 * "1 || 2 = 1"
 * same as above, (1 || 2) would yields 1, then concatenated with the string "1 || 2 = "
 */
console.log("0 && 1 = "+(0 && 1));
/**
 * "0 && 1 = 0"
 * (0 && 1): for the AND operator, if the first operand is falsy, javascript won't evaluate
 * the second operand anymore, so yields 0, then concatenate with string "0 && 1 = "
 */
console.log("1 && 2 = "+(1 && 2));
/**
 * "1 && 2 = 2"
 * same as above, in (1 && 2), for AND operator, if all operands are truthy, it returns the
 * last truthy value, which is 2. Then concatenation of strings like above.
 */
console.log(false == '0')
/**
 * true
 * when comparing different data types using "==", javascript attemps to convert the values
 * to a common type before making the comparison. In this case, boolean false would be coerced
 * into a numeric value 0, then the string '0' would also be coerced into numeric 0. Both values
 * are numerically equal after coercion, so returns true.
 */
console.log(false === '0')
/**
 * false
 * for strictly equality "===", it not only checks the value equality but also ensure 
 * the types of operands are the same. In this case, a boolean value and a string are different
 * types, so result is false.
 */