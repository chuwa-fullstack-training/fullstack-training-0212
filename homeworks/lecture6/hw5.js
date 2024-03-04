const { resolve } = require("path");

// 1. use `promise` to print 1, 2, 3 in every 1 second
function print(val) {
  // your code here
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(val);
      resolve();
    }, 1000);
  });
}

print(1)
  .then(() => print(2))
  .then(() => print(3));

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  return nums.reduce((promise, num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000);
    });
  }, Promise.resolve());
}

printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct

function trafficLight() {
  // your code here
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("red");
      resolve();
    }, 2000);
  }).then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("green");
        resolve();
      }, 1000);
    })
      .then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("yellow");
            resolve();
          }, 3000);
        });
      })
      .then(() => trafficLight());
  });
}

trafficLight();
