// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  }).then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(2);
        resolve();
      }, 1000);
    }).then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(3);
          resolve();
        }, 1000);
      })
    })
  })
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList(nums) {
  nums.reduce((acc, currentNum) => {
    setTimeout(() => {
      console.log(currentNum);
    }, acc);
    return acc + 1000;  // Increment the delay for the next number
  }, 0);  // Initial delay
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  const delay = (color, time) => new Promise(resolve => {
      setTimeout(() => {
          console.log(color);
          resolve();
      }, time);
  });

  const startCycle = () => {
      delay('red', 3000)
          .then(() => delay('green', 4000))
          .then(() => delay('yellow', 2000))
          .then(startCycle); // Recurse to repeat the cycle
  };

  startCycle(); // Start the traffic light cycle
}