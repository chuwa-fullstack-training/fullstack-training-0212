// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
console.log(0.1 + 0.2 == 0.3);
// false, in javascript, the calculation of floating number will result in some error.
console.log(1 +  "2" + "2");
//122, the 1 will be convert to string type, then In string "1"+"2"+"2"="122"
console.log(1 +  +"2" + "2");
//33, three steps. Firstly, +"2" result in number 2, Secondly, 1 + +"2" result in number 3. Lastly, 3+"2" result in string "32"
console.log(1 +  -"1" + "2");
//02 firstly, -"1" result number -1, Secondly, 1+ -"1" result number 0, Lastly, 0+"2" result in string"02""
console.log(+"1" +  "1" + "2");
//112, +"1 " result number 1, 1+"1"+"2" the first 1 is convert to string. Then result is string"112""
console.log( "A" - "B" + "2");
//NaN2 "A"-"B" result in NaN, "NaN"+2 result in String"NaN2"
console.log( "A" - "B" + 2);
//NaN, NaN+2=NaN
console.log("0 || 1 = "+(0 || 1));
//0 || 1 = 1, 0||1=1, then conbine the string
console.log("1 || 2 = "+(1 || 2));
//1||2=1
console.log("0 && 1 = "+(0 && 1));
//0&&1=0
console.log("1 && 2 = "+(1 && 2));
//1&&2=2
console.log(false == '0')
//true, false be cunverted to number 0, '0' be converted to number 0, then, result is true;
console.log(false === '0')
//false, different type, the "===" will return false