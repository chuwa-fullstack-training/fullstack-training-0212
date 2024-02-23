// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//       console.log("timerStart");
//       resolve("success");
//       console.log("timerEnd");
//     }, 0);
//     console.log(2);
//   });
  
//   promise.then((res) => {
//     console.log(res);
//   });
  
//   console.log(4);



// Promise.resolve().then(() => {
//   console.log('promise1');
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)
// });
// const timer1 = setTimeout(() => {
//   console.log('timer1')
//   Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)
// console.log('start')
function x() {
    for (let i = 1; i <= 10; i++) {
      setTimeout(function () {
        console.log(i);
      }, 1000 );
    }
    
      console.log("Learn");

  }
  x();
