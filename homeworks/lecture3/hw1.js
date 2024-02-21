/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    // let a, b, c, d;
    // a + b + c + d = 48;
    // a < 100;
    // b < 20;
    // c < 4;
    // d < 2;
    for(let d = 0; d <= 2; d++) {
        for(let c = 0; c <= (100 - 50 * d) / 25; c++) {
            for(let b = 0; b <= (100 - 50 * d - 25 * c) / 5; b++) {
                for(let a = 0; a <= (100 - 50 * d - 25 * c - 5 * b); a++) {
                    if((a + b + c + d === 48) && (a + 5*b + 25*c + 50 *d === 100)) {
                        console.log(a, b , c, d);
                    }
                }
            }
        }
    }
}
pickCoins();