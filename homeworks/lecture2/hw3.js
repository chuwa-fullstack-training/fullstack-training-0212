// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
/*
 * explanation: This is a floating point arithmetic issue.
 * because 0.1 and 0.2 cannot be represented exactly in binary floating point.
 * When you add 0.1 and 0.2, the result is not exactly 0.3.
 */

console.log(0.1 + 0.2 == 0.3);
// false
/*
 * explanation: This is a floating point arithmetic issue.
 * because 0.1 and 0.2 cannot be represented exactly in binary floating point.
 * When you add 0.1 and 0.2, the result is not exactly 0.3. so, 0.1 + 0.2 == 0.3 is false.
 */

console.log(1 + "2" + "2");
// 122
/*
 * explanation: The + operator is used for both addition and concatenation.
 * When you add a number and a string, the number is coerced to a string.
 * When you add two strings, they are concatenated.
 */

console.log(1 + +"2" + "2");
// 32
/*
 * explanation: The + operator is used for both addition and concatenation.
 * The expression +"2" is a unary plus operator. It converts the string "2" to the number 2.
 * When you add two numbers, they are added.
 * Then 3 is coerced to a string.
 * When you add two strings, they are concatenated.
 */

console.log(1 + -"1" + "2");
// 02
/*
 * explanation: The + operator is used for both addition and concatenation.
 * The expression -"1" is a unary minus operator. It converts the string "1" to the number -1.
 * When you add two numbers, they are added.
 * Then 0 is coerced to a string.
 * When you add two strings, they are concatenated.
 */

console.log(+"1" + "1" + "2");
// 112
/*
 * explanation: The + operator is used for both addition and concatenation.
 * The expression +"1" is a unary plus operator. It converts the string "1" to the number 1.
 * Then 1 is coerced to a string.
 * When you add two strings, they are concatenated.
 */

console.log("A" - "B" + "2");
// NaN2
/*
 * explanation: The - operator is used for subtraction.
 * The expression "A" - "B" is NaN.
 */

console.log("A" - "B" + 2);
// NaN
/*
 * explanation: The - operator is used for subtraction.
 * The expression "A" - "B" is NaN.
 * NaN + 2 is still NaN.
 */

console.log("0 || 1 = " + (0 || 1));
// 0 || 1 = 1
/*
 * explanation: The || operator returns the value of the first operand if the first operand is truthy.
 * If the first operand is falsy, it returns the value of the second operand.
 * 0 is falsy, so 0 || 1 returns 1.
 */

console.log("1 || 2 = " + (1 || 2));
// 1 || 2 = 1
/*
 * explanation: The || operator returns the value of the first operand if the first operand is truthy.
 * If the first operand is falsy, it returns the value of the second operand.
 * 1 is truthy, so 1 || 2 returns 1.
 */

console.log("0 && 1 = " + (0 && 1));
// 0 && 1 = 0
/*
 * explanation: The && operator returns the value of the first operand if the first operand is falsy.
 * If the first operand is truthy, it returns the value of the second operand.
 * 0 is falsy, so 0 && 1 returns 0.
 */

console.log("1 && 2 = " + (1 && 2));
// 1 && 2 = 2
/*
 * explanation: The && operator returns the value of the first operand if the first operand is falsy.
 * If the first operand is truthy, it returns the value of the second operand.
 * 1 is truthy, so 1 && 2 returns 2.
 */

console.log(false == "0");
// true
/*
 * explanation: The == operator performs type coercion if the operands are of different types.
 * "0" is a string and false is a boolean. The boolean false is coerced to the number 0.
 * Then the string "0" is coerced to the number 0.
 */

console.log(false === "0");
// false
/*
 * explanation: The === operator does not perform type coercion.
 * "0" is a string and false is a boolean. They are of different types, so they are not equal.
 */
