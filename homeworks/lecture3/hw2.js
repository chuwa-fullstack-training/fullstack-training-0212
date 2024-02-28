/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(val1, val2) {
    // implement here
    if(val2 !== undefined){
        return val1 + val2;
    }else{
        return function (val2){
            return val1 + val2;
        }
    }
}

console.log(sum(2)(3) === 5)
console.log(sum(2, 3) === 5)
