/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */

// Actually 3 solutions?

const res = [];

function backtrack(vec, path, curr_sum, start) {
    if (curr_sum > 100) {
        return;
    }
    if (path.length == 48) {
        if (curr_sum == 100) {
            res.push(path.slice());
        }
        return;
    }
    for (let i = start; i < vec.length; i++) {
        path.push(vec[i]);
        backtrack(vec, path, curr_sum + vec[i], i);
        path.pop();
    }
}

function pickCoins() {
    let vec = [1, 5, 25, 50];
    let path = [];
    backtrack(vec, path, 0, 0);
    return res;
}

console.log(pickCoins());