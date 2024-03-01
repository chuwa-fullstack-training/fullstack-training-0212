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

//   1 2
// .then() is called because promise resolved with 1
// the next .then() is called because it receives 2 from the first .then()
// catch is skipped

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

// 1 3
// .then is skipped because of reject(1)
// .catch is executed because reject(1)
// .then receives 3 from .catch so 3 logged

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

// 'Error: 2'

// Promise.all: if all promises resolved successfully, return an array with the resolve values
// but if any promise rejected, will return the reason with the first rejection

// runAsync(1) will resolve after 1 second with resolve(1)
// runReject(4) will be rejected after 4 seconds with reason 'Error: 4'
// runAsync(3) will resolve after 1 second with resolve(3)
// runReject(2) will be rejected after 2 seconds with reason 'Error: 2'
// thus will return the result of first rejection -> runReject(2)

