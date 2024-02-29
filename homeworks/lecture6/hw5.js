// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  let i = 1;
  function printFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(i);
        i++;
        resolve();
      }, 1000);
    });
  }
  function actualPrint() {
    printFunction()
    .then(() => printFunction())
    .then(() => printFunction());
  }
  return actualPrint();
}

// print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  function printFunction(num) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000);
    });
  }
  function actualPrint() {
    nums.reduce((promise, num) => {
      return promise.then(() => printFunction(num));
    }, Promise.resolve());
  }
  return actualPrint();
}
printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const colors = ['red', 'green', 'yellow'];
  function print(i) {
    return new Promise(resolve => {
      console.log(colors[i]);
      let nextIdx = (i+1) % 3;
      setTimeout(() => {
        resolve(nextIdx);
      }, 1000);
    });
  }
  function actualPrint(i) {
    print(i).then(nextIdx => actualPrint(nextIdx));
  }
  actualPrint(0);
}
// trafficLight();