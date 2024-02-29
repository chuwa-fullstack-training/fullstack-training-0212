// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  const helper = (number) => {
    return new Promise(
      (resolve) => {
        setTimeout(() => {
          console.log(number);
          resolve()
        }, 1000);
      }
    )
  }
  let resolved = Promise.resolve();
  for (let i = 1; i <= 3; i++) {
    resolved = resolved.then(() => helper(i));
  }
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  const helper = (number) => {
    return new Promise(
      (resolve) => {
        setTimeout(() => {
          console.log(number);
          resolve()
        }, 1000);
      }
    )
  }
  let resolved = Promise.resolve();
  nums.reduce((acc, curr) => {
    return acc.then(() => helper(curr));
  }, resolved);
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
const colors = ["red", "green", "yellow"]

function trafficLight() {
  // your code here
  const helper = (idx) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(colors[idx]);
        resolve();
      }, 1000);
    }).then(() => {
      helper((idx + 1) % 3);
    });
  }
  helper(0);
}
