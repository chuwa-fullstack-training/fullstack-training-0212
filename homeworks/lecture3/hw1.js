/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
  // implement here
  let result = [];
  for (let i = 0; i <= 48; i++) {
    for (let j = 0; j <= 24; j++) {
      for (let k = 0; k <= 9; k++) {
        for (let l = 0; l <= 1; l++) {
          if (i + 5 * j + 25 * k + 50 * l === 100 && i + j + k + l === 48) {
            result.push([i, j, k, l]);
            if (result.length === 2) {
              return result;
            }
          }
        }
      }
    }
  }
}
