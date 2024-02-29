// what is the output? and explain why?

// 1
Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });
/**
 * 1 2
 * Promise.resolve(1) creates a promise and immediately resolves with the value `1`,
 * and then in `then()` receives the resolved value `1`, and logs it to the console.
 * returns `2`. `catch()` would be skipped since the promise resolved successfully.
 * and the second `then()` receives previous returned value `2`. and logs that.
 */

// 2
Promise.reject(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    console.log(err);
    return 3;
  })
  .then(res => {
    console.log(res);
  });
/**
 * 1 3
 * similar to question 1. But this time the promise is rejected immediately with value `1`.
 * then the `catch()` block is executed and log the value `1`, and returns `2`. And then the
 * second `then()` in the code is executed, receiving value returned by `catch()` which is `3`.
 * and logs that the console.
 */
//3
function runAsync(x) {
  const p = new Promise(resolve =>
    setTimeout(() => resolve(x), 1000)
  );
  return p;
}
function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
}
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res => console.log(res))
  .catch(err => console.log(err));
/**
 * Error:2
 * since for promise.all, if all fullfilles then return an array, otherwise return the first
 * reject value. in this case runAsycn(1) resolves first with value `1`, runReject(2) comes next,
 * with error message: `Error: 2`, so this would be the result.
 */