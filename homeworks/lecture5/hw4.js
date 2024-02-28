// what is the output? and explain why?

// 1
// answer: 1, 2
// reason: 1 is resolved at first, then 2 is accepted by second .then, which will console.log(2)
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

// 2
// answer: 1 3
// reason: 1 is rejected at first and be catched by .catch, 
// the catch will console.log(1) then return 3 which will be printed out in the second .then
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

//3
// answer: Error 2
// explain: runAsync(1) resolves after 1 second.
// runReject(4) rejects after 4 seconds.
// runAsync(3) resolves after 3 seconds.
// runReject(2) rejects after 2 seconds.
// In this case, runReject(2) rejects before runReject(4), 
// so the first rejection encountered is from runReject(2). 
// Therefore, the Promise.all() will reject with the value of the first rejected promise, 
// which is "Error: 2".

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
