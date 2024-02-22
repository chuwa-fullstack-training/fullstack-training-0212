/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(a) {
    // implement here
    if(arguments.length === 1) {
        return function(b) {
            return a + b;
        }
    }
    else {
        return a+b;
    }
}
function test() {
    console.log(sum(2)(3) === 5);
    console.log(sum(2, 3) === 5);
}
test();
