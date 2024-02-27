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
// the output is "1 2", because the promise immediately resolved with the value "1", after the then function
// was called, it will output the 1 into the console and return a new value, since there is no error happens
// so the function catch will not be executed, then the function then output the new value from the previous
// step which is 2

// // 2
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
// the output is "1 3", since the promise immediately resolved with rejected value 1, the function then will
// be skipped, the function catch will receive the value 1 and print it out, then return a new value 3 and being
// printed out in the function then

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

// Promise.all takes an array of these promises and waits for all of them to complete. However, Promise.all fails fast, meaning if any of the promises in the array rejects, Promise.all immediately rejects with the reason of the first promise that rejects, without waiting for the other promises to complete.
// In this scenario, runReject(2) will reject first (after 2000 milliseconds) because it has the shortest timeout before it rejects. Therefore, the entire Promise.all call will reject at that point with the error 'Error: 2', and the .catch handler will be invoked.
// Thus, the output of this code will be: "Error: 2"
