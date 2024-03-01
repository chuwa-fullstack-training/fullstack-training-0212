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
    });
  }).then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(3);
        resolve();
      }, 1000);
    });
  });
}



// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList(nums) {
  nums.reduce((promise, currentNum) => {
    return promise.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(currentNum);
          resolve();
        }, 1000);
      });
    });
  }, Promise.resolve()); // Start with a resolved promise to kickstart the reduction
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function changeColor(color, nextColorFunc, delay) {
  console.log(color); 
  setTimeout(nextColorFunc, delay); 
}

function trafficLight() {
  function red() {
    changeColor('red', green, 1000); 
  }
  
  function green() {
    changeColor('green', yellow, 1000); 
  }
  
  function yellow() {
    changeColor('yellow', red, 1000);
  }

  red();
}

trafficLight();

