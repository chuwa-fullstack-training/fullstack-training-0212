// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  var promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(1);
      resolve()
    },1000)
  })
  var promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(2);
      resolve()
    },2000)
  })
  var promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(3);
      resolve()
    },3000)
  })

  Promise.all([promise1,promise2,promise3])
  // your code here
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  const promises = []
  nums.reduce((accumulator, element, index,array)=>{
      
      promises.push(new Promise((resolve,reject)=>{
          setTimeout(()=>{
              console.log(element)
              resolve();
          },accumulator * 1000)
      }))
      return (accumulator+1);

  },1)

  Promise.all(promises)
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const promises = []
  var promiseRed = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(setInterval(()=>{
        console.log("red")
      },3000))
    },0)
  })
  var promiseGreen = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(setInterval(()=>{
        console.log("green")
      },3000))
    },1000)
  })
  var promiseYellow = new Promise((resolve,reject)=>{
    setTimeout(()=>{  
      resolve(setInterval(()=>{
        console.log("yellow")
      },3000))
    },2000)
  })

  Promise.all([promiseRed, promiseGreen,promiseYellow])
}

