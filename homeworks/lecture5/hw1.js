// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//5, 5, 5, 5, 5 at same time (1m after loop ends)
//i is var has function scope, by the time setTimeout() callbacks
//executed the loop has finished cuz setTimeout is async and pushed 
//into macroqueue, which needs to wait main stack empty to execute.
//When console.log(), i are all 5 now

//2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//0, 1, 2, 3, 4 at same time (after 1s)
//i is let now, block-scope, its value can't be geted by other loops.
//when main function finished, macroqueue pushes all funtions to stack
//to exexute with their own scope i.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
//0, 1, 2, 3, 4 at same time (after 1s)
//using IIFE, invoke immediately after create the function with a new 
//function scope, separating each function's i. 

// 4
let fn = () => {  // 本身就是一个回调函数，1s后执行
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
//I am fn (after 1s)
//first fn binds to 'I am fn' in stack first, then passed as arg to setTimeout
//then stack lets fn points to another function, but no effect to setTimeout. 
//After the stack empty, the queue pushes setTimeout out with its original 
//arg which is assigned before pushed into the queue

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
//{name: 'another obj'}
//The setTimeout callback here captures the obj reference, 
//not the object itself. So the properties of this obj have 
//been changed and that affects itself, which captured in setTimeout
