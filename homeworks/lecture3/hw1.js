/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
  // implement here
  res = [];
  cnt = 0;
  function dfs(coin_number, sum, path) {
    if (cnt >= 2 || coin_number > 48 || sum > 100) {
      return;
    }
    if (coin_number === 48 && sum == 100) {
      path.sort();
      if (
        !res.some(
          (existingPath) =>
            JSON.stringify(existingPath) === JSON.stringify(path)
        )
      ) {
        res.push(path.slice());
        cnt++;
      }
      return;
    }
    dfs(coin_number + 1, sum + 1, path.concat("1c"));
    dfs(coin_number + 1, sum + 5, path.concat("5c"));
    dfs(coin_number + 1, sum + 25, path.concat("25c"));
    dfs(coin_number + 1, sum + 50, path.concat("50c"));
  }
  dfs(0, 0, []);
  console.log("res", res);
  return res;
}

console.log(pickCoins());
