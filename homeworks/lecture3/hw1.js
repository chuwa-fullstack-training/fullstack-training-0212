/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    var res = [];
    for (var oneCent = 0; oneCent<=48; oneCent++) {
        for (var fiveCent = 0; fiveCent<=48; fiveCent++) {
            for (var twentyfiveCent = 0; twentyfiveCent<=48; twentyfiveCent++) {
                for (var fiftyCent = 0; fiftyCent<=48; fiftyCent++) {
                    if ((oneCent + 5 * fiveCent + 25 * twentyfiveCent + fiftyCent * 50) === 48) {
                        res.push({
                            '1c': oneCent,
                            '5c': fiveCent,
                            '25c': twentyfiveCent,
                            '50c': fiftyCent
                        });
                    }
                }
            }
        }
    }
    for (var i = 0; i < 2 && i < res.length; i++) {
        console.log('Solution ${i+1}:', res[i]);
    }
}
