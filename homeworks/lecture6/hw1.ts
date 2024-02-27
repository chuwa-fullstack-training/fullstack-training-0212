// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  } as T;
}
// since the function's return type requires to be T, in fact, it returns a
// subtype of User, which type is 'customer' not strictly same with User. 
// TypeScript cannot determine in this case whether the return type is indeed 
// an exact extension of the input type. So we should tell it it's type T.

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    return a + b;
  }
}

//fix to
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === 'string') {
    return `${a} : ${b}`;
  } else if (typeof a === 'number' && typeof b === 'number'){
    return a + b;
  } else {
    return new Error;
  }
}
