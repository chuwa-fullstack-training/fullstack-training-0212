
// 1. use `promise` to print 1, 2, 3 in every 1 second
function delay(time){
  return new Promise((resolve, reject)=>setTimeout(resolve,time));
}
function print() {
  // your code here
  delay(1000).then(()=>{
    console.log(1);
    return delay(1000);
  }).then(()=>{
    console.log(2);
    return delay(1000);
  }).then(()=>{
    console.log(3);
  })
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((delayCount, num)=>{
    delayCount.then(()=>{
      console.log(num);
      return delay(1000);
    })
  },delay(1000));
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  function cyclyLight(){
    return delay(1000).then(()=>{
      console.log('red');
      return delay(1000);
    }).then(()=>{
      console.log('yellow');
      return delay(1000);
    }).then(()=>{
      console.log('green');
      return delay(1000);
    }).then(cyclyLight);
  }
  cyclyLight();
}
