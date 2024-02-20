/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(a,b) {
    // implement here
    
    if(a && b)
    {
        return a + b;
    }
    else
    {
        return sum2;
    }
    function sum2(b)
    {
        return a + b
    }
}
console.log(sum(2)(3))
console.log(sum(2, 3))