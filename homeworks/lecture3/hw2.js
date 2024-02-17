/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(x, ...args) {
    if (args.length > 0) {
        return args.reduce((acc, val) => {
            return acc + val;
        }, x);
    } else {
        return (y) => {
            return x + y;
        }
    }
}
