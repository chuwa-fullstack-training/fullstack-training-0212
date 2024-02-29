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

// 1
// 2

// Because Promise.resolve(1) creates a resolved Promise.
// First, the callback function in the first then outputs the value resolved by the Promise (1) to the console, and then returns the value 2.
// Next, a catch method is added to catch any errors that might occur, no error is triggered. Since no error occurred, the callback in
// the callback in catch will not be executed


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

//1
//3
//Promise.reject(1) creates a rejected Promise and then appends a handler function via the then method. 
// Since the Promise is rejected, it will jumps to the next catch method.return value is 3.



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


  // Error: 2
  // Since Promise.all waits for all incoming Promises to resolve or have one rejected, 
  // the overall execution time depends on the longest Promise. in this case, 
  // runReject(4) is the longest, so the entire Promise.all execution time is 4 seconds.
