// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    ...u,
    type: "customer",
  };
}
// T is extend from User, it may contains other properties. We need to copy other properties from u to ensure the function will return a T object

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else if(typeof a ==="number"&&typeof b==="number"){
    return a + b;
  }
}
// add a condition to ensure a and b both are number and they are okay for +