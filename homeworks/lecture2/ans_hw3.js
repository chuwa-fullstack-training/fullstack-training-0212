// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); 
// 0.30000000000000004
//Explanation: Javascript has floating-point mechanism.


console.log(0.1 + 0.2 == 0.3);
//false
//Explanation: 0.30000000000000004 does not strictly equal 0.3.

console.log(1 +  "2" + "2");
//122
////Explanation: "1" here is string type when doing add operations to number and string.

console.log(1 +  +"2" + "2");
//32
//Explanation: '+'before a string converts that string to number type.

console.log(1 +  -"1" + "2");
//02
//Explanation: '-' before a string converts that string to number type.

console.log(+"1" +  "1" + "2");
//112
//Explanation: '+'before a string converts that string to number type.

console.log( "A" - "B" + "2");
//NaN2
//Explanation:  '-' has no operation between 2 strings, which lead the answer to Not-a-number. 

console.log( "A" - "B" + 2);
//NaN
//Explanation:  "A" - "B" would be NaN, then Nan adds a number will result in NaN as well.

console.log("0 || 1 = "+(0 || 1));
//0 || 1 = 1
//Explanation: '||' returns the first truthy value which would be 1 here. 

console.log("1 || 2 = "+(1 || 2));
//1 || 2 = 1
//Explanation: '||' returns the first truthy value which would be 1 here. 

console.log("0 && 1 = "+(0 && 1));
//0 && 1 = 0
//Explanation: '&&' returns the first falsy value, which is 0 here.

console.log("1 && 2 = "+(1 && 2));
//1 && 2 = 2
//Explanation:  '&&' returns the first falsy value, which is 2 here.

console.log(false == '0')
//true
//Explanation: '==' regards the type on both sides. false would be '0' in a number which equals string 0 on the right side.

console.log(false === '0')
//false
//Explanation: '===' needs both sides have the same type. false(boolean type) != '0'(string type).
