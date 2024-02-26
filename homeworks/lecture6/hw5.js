// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  Promise.resolve(1)
    .then((result) => {
      setTimeout(() => {
        console.log(result);
      }, 1000);
      return Promise.resolve(2);
    })
    .then((result) => {
      setTimeout(() => {
        console.log(result);
      }, 2000);
      return Promise.resolve(3);
    })
    .then((result) => {
      setTimeout(() => {
        console.log(result);
      }, 3000);
    });
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((promise, num, index) => {
    return promise.then(() => {
      return new Promise((resolve) => {
        setTimeout(
          () => {
            console.log(num);
            resolve();
          },
          1000 * (index + 1),
        );
      });
    });
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const colors = ["red", "green", "yellow"];
  let index = 0;
  setInterval(() => {
    console.log(colors[index]);
    index = (index + 1) % 3;
  }, 1000);
}
