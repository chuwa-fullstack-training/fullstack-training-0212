/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */

function dfs(currentComb, totalValue, totalCoins, index, solutions, coins){
    if(solutions.length >= 2)
        return;

    if(totalValue === 100 && totalCoins === 48){
        solutions.push([...currentComb]);
        return;
    }

    if(totalValue > 100 || totalCoins > 48)
        return;

    for(let i = index; i < coins.length; i++){
        currentComb.push(coins[i]);
        dfs(currentComb, totalValue+coins[i], totalCoins+1, i, solutions, coins);
        currentComb.pop();
    }
}

function pickCoins() {
    // implement here
    const coins = [50, 25, 5, 1];
    let solutions = [];

    dfs([], 0, 0, 0, solutions, coins);

    solutions.forEach((val) => {console.log(val);});
}

pickCoins();
