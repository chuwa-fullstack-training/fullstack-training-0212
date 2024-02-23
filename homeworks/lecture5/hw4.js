// what is the output? and explain why?

// 1
Promise.resolve(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
  });
// Output: 1 2
// As input 1 are resolved, .catch will be ignored
// promises will be resulved sequencially, 1 is passed into first .then() and prints out,
//  First .the() returns 2 and pass into the second .then() and prints out.

// 2
Promise.reject(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    console.log(err);
    return 3;
  })
  .then((res) => {
    console.log(res);
  });
// output: 1 3
// the first promise is rejected, and the rejected result '1' is catched and prints out
// the rejected function return '3', '3' is passed to the second .then(), and prints out

//3
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

// Output: Error 2
// We use Promise.all() to handle a list of promises and wait for promises to be settled.
// If any of the promise is rejected, Promise.all() will be rejected and .catch() will be executed.
// As runReject(4) and runReject(2) will go to reject state,
// the error message for the first reject promise will be output.
// As runReject(2) has shorter delay time, "Error: 2" will be output and Promise.all() will be completed.
