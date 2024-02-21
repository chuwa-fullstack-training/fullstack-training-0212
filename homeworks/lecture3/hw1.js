/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
 function pickCoins() {
  helper(100, 48, []);
}

function helper(rest, count, list) {
  if (count === 0 && rest === 0) {
    console.log(list);
    return;
  }

  if (count === 0 || rest < 0) {
    return;
  }

  helper(rest - 1, count - 1, list.concat([1]));
  helper(rest - 5, count - 1, list.concat([5]));
  helper(rest - 25, count - 1, list.concat([25]));
  helper(rest - 50, count - 1, list.concat([50]));
}

pickCoins();
