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
//1, 2
//as input 1 resolved, then executes .then() and won't get into .catch()
//first .then prints its value 1, then return a new value 2 and prints out 
//by the 2nd .then() 

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
//1, 3
//since the promise is rejected so it will get into .cathch() with value 1
//and return a promise resolved with 3, which be printed out by last .then()

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
// Error：2
// Since runReject() returns a rejected promise and Promise.all() will wait 
// all promises fullfilled then get into .then(), now it will only get into
//.cathch(). While runReject(2) has a shorter wait time, it will be rejected 
//first. The function chains finish when we get first error.
