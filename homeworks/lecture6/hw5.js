// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  function printNumber(number){
    return new Promise(resolve => {
      setTimeout(()=>{
        console.log(number);
        resolve();
      }, 1000);
    });
  }
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  nums.reduce((promise, num) => {
    return promise.then(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log(num);
          resolve();
        }, 1000);
      });
    });
  }, Promise.resolve())
  .then(() => {
    console.log('Done');
  });
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  const colors = ['red', 'green', 'yellow'];
  let currentIndex = 0;

  function changeLight() {
    console.log(colors[currentIndex]);
    currentIndex = (currentIndex + 1) % colors.length;
  }

  function operateTrafficLight() {
    return new Promise(resolve => {
      setTimeout(() => {
        changeLight();
        resolve();
      }, 2000); // Adjust the delay time as needed
    });
  }

  function cycleLights() {
    operateTrafficLight().then(() => cycleLights());
  }

  // Start the traffic light cycle
  cycleLights();
}
