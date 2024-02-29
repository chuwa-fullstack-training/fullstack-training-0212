// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};
// function makeCustomer<T extends User>(u: T): T {
//   return {
//     id: u.id,
//     type: "customer",
//   };
// }
// fixed as below:
function makeCustomer<T extends User>(u: T): User {
  return {
    id: u.id,
    type: "customer",
  };
}
/**
 * Error: the function is trying to return a value that is not assignable to type `T`.
 * Fix: change the function return type from `T` to `User`
 */
// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if(typeof a === "number" && typeof b === "number") {
    return a + b;
  }
}
