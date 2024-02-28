/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    const coins = [1, 5, 25, 50];
    const goal = 100;
    const solutions = [];

    for (let i = 0; i <= goal; i++) {
        for (let j = 0; j <= goal / 5; j++) {
            for (let k = 0; k <= goal / 25; k++) {
                for (let l = 0; l <= goal / 50; l++) {
                    if (i + 5 * j + 25 * k + 50 * l === goal && (i + j + k + l) === 48) {
                        solutions.push([i, j, k, l]);
                        if (solutions.length === 2) {
                            return solutions;
                        }
                    }
                }
            }
        }
    }

    return solutions;
}

//test result:
const result = pickCoins();
console.log(result);
