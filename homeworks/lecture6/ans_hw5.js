// 1. Print 1, 2, 3 in every 1 second using promises
function print() {
    let count = 1;
  
    function printNumber() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(count);
                count++;
                resolve();
            }, 1000);
        });
    }
  
    function printSequence() {
        printNumber().then(printSequence);
    }
  
    printSequence();
  }


const nums = [3, 1, 6, 9, 2];
  
function printList() {
    nums.reduce((promise, num) => {
        return promise.then(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(num);
                    resolve();
                }, 1000);
            });
        });
    }, Promise.resolve());
}
  

function trafficLight() {
    const colors = ['red', 'green', 'yellow'];
  
    function cycleLights(index) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(colors[index % 3]);
                resolve(index + 1);
            }, 1000);
        });
    }

    function runTrafficLight() {
        let index = 0;
        function nextCycle() {
            cycleLights(index).then((nextIndex) => {
                index = nextIndex;
                nextCycle();
            });
        } 
  
        nextCycle();
    }
  
    runTrafficLight();
  }

