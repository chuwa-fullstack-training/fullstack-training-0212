function print(num: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}


// 1. use `promise` to print 1, 2, 3 in every 1 second

async function printNumbers() {
  for (let i = 1; i <= 3; i++) {
    await print(i);
    console.log(i);
  }
}

// printNumbers();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
// const nums = [3, 1, 6, 9, 2];
async function printList(nums: number[]): Promise<void> {
  await nums.reduce(async (previousPromise, num) => {
    await previousPromise;
    console.log(num);
    await print(1000);
  }, Promise.resolve());
}
const nums = [3, 1, 6, 9, 2];
printList(nums);

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
async function trafficLight() : Promise<void> {
  // your code here
  const color = ['red', 'green','yellow'];
  let x: number= 0;
  while(true) {
    await print(1000);
    console.log(color[x % 3] );
    x++;
  }
}
trafficLight();

