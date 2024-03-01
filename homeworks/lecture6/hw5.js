// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  })
    .then(() => new Promise((resolve) => {
      setTimeout(() => {
        console.log(2);
        resolve();
      }, 1000);
    }))
    .then(() => new Promise((resolve) => {
      setTimeout(() => {
        console.log(3);
        resolve();
      }, 1000);
    }));
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList(nums) {
  nums.reduce((promise, num) => {
    return promise.then(() => new Promise((resolve) => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000);
    }));
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct

function changeLight(color, duration) {
  return new Promise(resolve => {
    console.log(color);
    setTimeout(resolve, duration);
  });
}

function trafficLight() {
  changeLight('red', 1000)
    .then(() => changeLight('green', 1000))
    .then(() => changeLight('yellow', 1000))
    .then(() => trafficLight());
}
