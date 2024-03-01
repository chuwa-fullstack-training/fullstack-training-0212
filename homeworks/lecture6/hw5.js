// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  function printNumber(number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(number);
        resolve();
      }, 1000);
    });

  }
  printNumber(1).then(() => printNumber(2)).then(() => printNumber(3));
  // use promise to achivee the time intervals
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  function printNumber(num) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000);
    });
  }
  nums.reduce((promiseChain, num) => {
    return promiseChain.then(() => printNumber(num));
  }, Promise.resolve());
  // use resude to traverse the list


}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  var light = ['red', 'green', 'yellow'];
  function changelight(index){
    setTimeout(()=>{console.log(light[index]); changelight((index+1)%3)},1000);
    // use recursiong to repreat the pattern
  }
  changelight(0);
}
