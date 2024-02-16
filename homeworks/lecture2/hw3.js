// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
//Answer: 0.3000004, a floating point summation does not have exact binary representation

console.log(0.1 + 0.2 == 0.3);
//Answer: Flase, because the floating point does not have exact binary representation

console.log(1 +  "2" + "2");
//Answer: '122', implicity consider + as string concatenation

console.log(1 +  +"2" + "2");
//Answer: '32', unary + sign will convert "2" to number, so it becomes 1 + 2 = 0, then 3 + "2" will be consider as string concatenation which is "32"

console.log(1 +  -"1" + "2");
//Answer: '02', unary - sign will convert "1" to number, so it becomes 1 - 1 = 0, then 0 + "2" will be consider as string concatenation which is "02"
console.log(+"1" +  "1" + "2");
//Answer: '112', implicity will do coercion to "2"
console.log( "A" - "B" + "2");
//Answer: 'NaN2', "A" - "B" will result in NaN, and NaN string concatnate with '2' is 'NaN2'
console.log( "A" - "B" + 2);
//Answer: 'NaN', "A" - "B" will result in NaN, and NaN + 2 is still NaN'
console.log("0 || 1 = "+(0 || 1));
//Answer: '0 || 1 = 1', (0 || 1) equals 1, then do string concatnation with the string in the front
console.log("1 || 2 = "+(1 || 2));
//Answer: '1 || 2 = 1', (1 || 2) equals 1, then do string concatnation with the string in the front
console.log("0 && 1 = "+(0 && 1));
//Answer: '0 && 1 = 0', (0 && 1) equals 0, then do string concatnation with the string in the front
console.log("1 && 2 = "+(1 && 2));
//Answer: '1 && 2 = 2', (1 && 2) equals 2, then do string concatnation with the string in the front

console.log(false == '0')
//Answer: true,  coercion '0' to false

console.log(false === '0')

//Answer: false, types are not equal