/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let num = 48;
    let target = 100
    let ans = []
    for (let c_1 = 0; c_1<= num; c_1++){
        for (let c_5 = 0; c_5<= num - c_1; c_5++){
            for (let c_25 = 0; c_25<= num - c_1 - c_5; c_25++){
                let c_50 = num - c_1 - c_5 - c_25;

                let sum = c_1 + 5*c_5 + 25*c_25 + 50*c_50;

                if(sum === target){
                    ans.push(["method "+(ans.length+1) + ":", c_1+" 1c", c_5+ " 5c", c_25+" 25c", c_50+" 50c"])
                }

                if (ans.length===2){
                    console.log("2 solutions are: ", ans)
                    return
                }
        
            }
        
        }
    }
    
}

pickCoins() 
// Output: 2 solutions are:  [
    // [ 'method 1:', '35 1c', '13 5c', '0 25c', '0 50c' ],
    // [ 'method 2:', '40 1c', '7 5c', '1 25c', '0 50c' ]]
  
