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
function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  } as T;
}
// should return type T because the function has promised to return type T

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
// function f(a: string | number, b: string | number) {
//   if (typeof a === "string") {
//     return `${a} : ${b}`;
//   } else {
//     return a + b;
//   }
// }
function f(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("Parameters must both be numbers or strings");
  }
}
// Operator '+' cannot be applied to types 'number' and 'string | number'.
// if a and b are different types, it should throw an error
