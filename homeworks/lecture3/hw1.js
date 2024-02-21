/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
var result={};
var counter=0;
function pickCoins() {
    // implement here
    var prev=[0,0,0,0];
    helper(100,48,prev);
    console.log(result);
}

function helper(amount, rest,prev){
    if(amount===0&&rest===0){
        result["Solution" + counter] = [...prev];
        counter++;
        return;
    }else if(amount<0||rest<0){
        return;
    }
    rest--;
    prev[0]++;
    helper(amount-1,rest,prev);
    prev[0]--;

    prev[1]++;
    helper(amount-5,rest,prev);
    prev[1]--;

    prev[2]++;
    helper(amount-25,rest,prev);
    prev[2]--;

    prev[3]++;
    helper(amount-50,rest,prev);
    prev[3]--;

}
