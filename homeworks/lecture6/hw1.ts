// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

// The function should return a value with a type of T
// Even though T extends User, we need to make it as T
function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  } as T;
}

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === typeof b) {
    return `${a} : ${b}`;
  } else {
    throw new Error('Error, a and b should have the same type.');
  }
}
