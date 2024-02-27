// 1. why there would be error in the following code? and how to fix it?
type User1 = {
  id: number;
  type: string;
};

function makeCustomer<T extends User1>(u: T):T | User1 {
  return {
    id: u.id,
    type: "customer",
  };
}
/*
Answer: As the ts compiler says, the T could be instantiated with a different subtype, add | User to fix the error
*/

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" || typeof b === "string") {
    return `${a} : ${b}`;
  } 
  else if (typeof a === "number" || typeof b === "number") {
    return a + b;
  }
  else
  {
    throw (new Error("invalid input, input type should be string,string or number,number"))
  }
}
