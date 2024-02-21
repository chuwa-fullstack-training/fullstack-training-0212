/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    // implement here
    if(arguments.length == 1) {
        let sum = arguments[0];
        return function() {
            for(let num of arguments) {
                sum += num;
            }
            // console.log(sum);
            return sum;
        };
    }
    let sum = 0;
    for(let n of arguments) {
        sum += n;
    }
    // console.log(sum);
    return sum;
}
console.log(sum(2,3) === 5);
console.log(sum(2)(3) === 5);