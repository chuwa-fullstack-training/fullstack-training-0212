/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
  coins = [1, 5, 25, 50];
  let res = [];
  backtrack(coins, 0, [], res, 0);
  return res;
}

function backtrack(coins, pathSum, path, res, start) {
  if (pathSum > 100 || path.length > 48) {
    return;
  }
  if (pathSum === 100 && path.length === 48) {
    res.push(JSON.parse(JSON.stringify(path)));
    return;
  }
  for (let i = start; i < coins.length; i++) {
    path.push(coins[i]);
    backtrack(coins, pathSum + coins[i], path, res, i);
    path.pop();
  }
}

console.log(pickCoins());
