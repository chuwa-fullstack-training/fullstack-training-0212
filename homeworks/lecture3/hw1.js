/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    let count = 0;
    for (let i = 0; i <= 48; i++) {
        for (let j = 0; j <= 48 - i; j++) {
            for (let p = 0; p <= 48 - i - j; p++) {
                for (let q = 0; q <= 48 - i - j - p; q++) {
                    if (i + j + p + q === 48) {
                        let total_val = i + j * 5 + p * 25 + q * 50;
                        if (total_val === 100) {
                            count++;
                            console.log('1c:' + i, '5c:' + j, '25c:' + p, '50c:' + q)
                            if (count == 2) {
                                return;
                            }
                        }
                    }
                }
            }
        }
    }

}

pickCoins();