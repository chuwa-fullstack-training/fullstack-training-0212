/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    var args = Array.prototype.slice.call(arguments); // convert
    if (args.length === 1) {
        var first = args[0];
        return function(second) {
            return first + second;
        };
    }
    if (args.length === 2) {
        return args[0] + args[1];
    }
}

console.log(sum(2)(3) === 5); // 输出 true
console.log(sum(2, 3) === 5); // 输出 true