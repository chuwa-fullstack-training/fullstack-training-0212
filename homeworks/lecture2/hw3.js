// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
//Because JS cannot exactly represented float points numbers, so it will be leading the problem like this

console.log(0.1 + 0.2 == 0.3);
// false
//Because JS cannot exactly represented float points numbers, the first part will be 0.30000000000000004,
//since 0.30000000000000004 != 0.3, so it will be false


console.log(1 +  "2" + "2");
// 122
//Because the first 1 will be convert to string, the equation will be  "1" + "2" + "2"
// so it will be 122 as string.  


console.log(1 +  +"2" + "2");
// 32
//Becase the 1 is number, the " " before "2" convert string(2) to number(2), so 1 + 2 is 3
// since the second "2" is still string, so number(3) + string(2) is string(32)


console.log(1 +  -"1" + "2");
// 02
//Becase the 1 is number, the "-" before "1`" convert string(1) to number(-1), so 1 + (-1) is 0
// since the second "2" is still string, so number(0) + string(2) is string(02)

console.log(+"1" +  "1" + "2");
// 112
//Becase there is " " before "1 ",so "1" will become number(1), rest of equation is string, 
// so number(1) + string(1) +string(2) is string(112)

console.log( "A" - "B" + "2");
// NaN2
//Becase string(A) - string(B)is not valid for string, the result will be NaN
//NaN + "2" is string(NaN2)


console.log( "A" - "B" + 2);
// NaN
//Becase string(A) - string(B)is not valid for string, the result will be NaN
//NaN + (number)2 is still NaN

console.log("0 || 1 = "+(0 || 1));
// 0 || 1 = 1
//Because 0 is falsy value, 1 is truthy value, so 0 || 1 is 1


console.log("1 || 2 = "+(1 || 2));
// 1 || 2 = 1
//Because 1 is falsy value, 2 is not evaluated, so 1 || 2 is 1

console.log("0 && 1 = "+(0 && 1));
// 0 && 1 = 0
//Because 0 is falsy value, 1 is truthy value, so 0 && 1 is 0

console.log("1 && 2 = "+(1 && 2));
// 1 && 2 = 2 
// Because 1 is falsy value, 2 is not evaluated, so 1 && 2 is 2
console.log(false == '0')
// true
// Because == will convert '0' to  a boolean, 0 will be false, false == false is true;

console.log(false === '0')
// false
//Because false the boolean, 0 is string, false != boolean, return false;
