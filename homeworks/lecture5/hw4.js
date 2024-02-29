// what is the output? and explain why?

// 1
// output: 1 2
Promise.resolve(1)
  .then((res) => {
    // the value of res here is passed by the resolved value;
    console.log(res);
    return 2;
  })
  // Will not execute here
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    // the value of res here is passed by the value from top .then()
    console.log(res);
  });

// 2
// output: 1 3
Promise.reject(1)
  // .then() here will be ignored
  .then((res) => {
    console.log(res);
    return 2;
  })
  // Since the promise is rejected, it will print the rejected value;
  .catch((err) => {
    console.log(err);
    return 3;
  })
  // 3 will be passed to the next .then()
  .then((res) => {
    console.log(res);
  });

//3
// output: Error: 2
// Promise.all is used to handle a list of promises and will be rejected if
// one of the promises is rejected. Since runReject(2) has a shorter delay time
// Promise.all will print out Error: 2.
function runAsync(x) {
  const p = new Promise((resolve) => setTimeout(() => resolve(x), 1000));
  return p;
}

function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
}

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
