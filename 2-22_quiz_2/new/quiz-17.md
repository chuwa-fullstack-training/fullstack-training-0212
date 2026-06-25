17. Explain following code:

function x(){
  for (var i = 1; i <= 10; i++){
    setTimeout(function (){
      console.log(i);
    }, 1000);
  }
  console.log("Learn");
}
x();

// 1 -- 10
// Learn



// How to fix it?