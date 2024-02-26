// 1. use `promise` to print 1, 2, 3 in every 1 second
function print(i) {
  // your code here
  return new Promise(function (resolve) {
    setTimeout(() => {   
      console.log(i);
      resolve();
    }, 1000)
  })
}
print(1).then(() => print(2)).then(() => print(3));

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  (nums).reduce((promise, cur) => {
    return promise.then(() => new Promise(resolve => {
      setTimeout (() => {
        console.log(cur);
        resolve();    //即在一秒后，才标志着这个 Promise 已经被解决（resolved）了
      }, 1000);  
    }));
  }, Promise.resolve())
}
printList(nums);

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
async function trafficLight() {
  // your code here
  const lights = ['red', 'green', 'yellow'];
  const last = [5000, 4000, 2000];
  
  while (true) {
    for (let i of lights) {
      await new Promise(resolve => {
        setTimeout (() => {
          console.log(i);
          resolve();
        }, last[lights.indexOf(i)]);
      })
    }
  }
}
trafficLight()
