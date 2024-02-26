// 1. why there would be error in the following code? and how to fix it?
type User1 = {
  id: number;
  type: string;
};

function makeCustomer<T extends User1>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  } as T;
}
// As the function is reurning a new object, and typescript is unable to compare beween the types of the object
// and the type of the function, so we need to cast the object to the type of the function.

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("Parameters should be of the same type");
  }
}
console.log(f("a", "b"));
console.log(f(1, 2));
console.log(f("a", 2));
