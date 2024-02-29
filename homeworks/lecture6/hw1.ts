// 1. why there would be error in the following code? and how to fix it?
// type User = {
//   id: number;
//   type: string;
// };


// function makeCustomer<T extends User>(u: T): T {
//   return {
//     id: u.id,
//     type: "customer",
//   };
// }

type User = {
  id: number;
  type: string;
};


function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  }as T;
}

// TypeScript expects the returned type to be exactly T,
//  but the returned object type is { id: number, type: string },
//   which results in a type mismatch error.


// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if(typeof a === "number" && typeof b === "number") {
    return a + b;
  } else{
    throw("different type");
  }
}
