/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins1() {
    // implement here
    const res = 100;
    let dp = new Array(4);
    let arr = [1,5,25,50];
    let queue = [];
    let root = {
        dp: [48,0,0,0],
        sum: 48
    }
    queue.push(root);
    while(queue.length != 0){
        let node = queue.shift();
        if(node.sum == 100) return node.dp;
        for(let i = arr.length - 1;i >= 1;i--){
            if(node.sum + arr[i] - 1 <= res){
                let next = {};
                next.dp = [...node.dp];
                next.sum = node.sum + arr[i] - 1;
                next.dp[0]--;
                next.dp[i]++;
                queue.push(next);
            }
        }
    }
    return [];
}

let res = []
function pickCoins2(){
    dp = [48,0,0,0];
    arr = [1,5,25,50];
    dfs(48,dp,arr);
    return res;
}
function dfs(sum, dp, arr){
    if(sum == 100){
        res = [...dp];
        return;
    }
    for(let i = arr.length - 1;i >= 1;i--){
        if(sum + arr[i] - 1 <= 100){
            dp[i]++;
            dp[0]--;
            dfs(sum + arr[i] - 1, dp,arr);
            dp[i]--;
            dp[0]++;
        }
    }
}

console.log(pickCoins2());