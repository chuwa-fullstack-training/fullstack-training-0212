// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
//0.30000000000000004
//Precision issues in floating-point representation prevent certain decimal fractions 
//from being accurately converted to finite-length binary representations

console.log(0.1 + 0.2 == 0.3);
//false
//same reason above, not same value

console.log(1 +  "2" + "2");
//122
//'+' is treated as concentation sign while JavaScript attempts to make the data types 
//compatible to complete the operation or comparison by Type Coercion

console.log(1 +  +"2" + "2");
//32
//Type Coercion makes +"2" to number 2 ('+' is positive sign), then 1 + 2 = 3. 
//another '+' concentates number 3 and string 2, as 32

console.log(1 +  -"1" + "2");
//02
//Type Coercion makes -"1" to number -1 ('-' is negative sign), then 1 + (-1) = 0. 
//another '+' concentates number 0 and string 2, as 02

console.log(+"1" +  "1" + "2");
//112
//Type Coercion makes +"1" to number 1 ('+' is positive sign). 
//other '+'s concentate number 1, string 1 and string 2, as 112

console.log( "A" - "B" + "2");
//NaN2
//Since strings cannot be subtracted, 'A' - 'B' returns NaN (not a number)
//'+' concentates NaN and string 2, NaN is treated as string by type coercion

console.log( "A" - "B" + 2);
//NaN
//'A' - 'B' returns NaN (not a number), NaN + number 2 is still NaN

console.log("0 || 1 = "+(0 || 1));
//0 || 1 = 1
//Directly print out the string in quotation marks and the result of 0 or 1 = 1, 
//cuz or operation return second value if first value is falsy

console.log("1 || 2 = "+(1 || 2));
//1 || 2 = 1
//Directly print out the string in quotation marks and the result of 1 or 2 = 1, 
//cuz or operation return first value if first value is truthy

console.log("0 && 1 = "+(0 && 1));
//0 && 1 = 0
//Directly print out the string in quotation marks and the result of 0 and 1 = 0, 
//cuz and operation return first value if first value is falsy 

console.log("1 && 2 = "+(1 && 2));
//1 && 2 = 2
//Directly print out the string in quotation marks and the result of 1 and 2 = 2, 
//cuz and operation return second value if first value is truthy 

console.log(false == '0')
//true
//they have same value 0 by implicit coercion

console.log(false === '0')
//false
//cuz triple equal checks the type first, while false's type is boolean and '0''s 
//type is string
