
// 1. why there would be error in the following code? and how to fix it?
type User = {
    id: number;
    type: string;
  };
  
function makeCustomer<T extends User>(u: T): T {
    return {
      id: u.id,
      type: "customer",
    } as T; ///here
}

/*Explanation:
    Need to returned object adheres to the type T, are preserve the original structure of the object.
*/
  
  // 2. 

function f(a: string | number, b: string | number) {
    if (typeof a === "string") {
      return `${a} : ${b}`;
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }else{
        throw new Error("error");
    }
  }
  
  /*Explanation:
    Need to ensure that the function only accepts two parameters of the same type and throws an error if the types are different.
  */


