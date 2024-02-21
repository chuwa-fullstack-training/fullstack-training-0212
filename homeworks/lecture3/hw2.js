/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    // implement here
    if(arguments.length>1){
        var res=0;
        for (var i = 0; i < arguments.length; i++) {
            res += arguments[i];
        }
        return res;
    }else if(arguments.length===1&& typeof arguments[0] === 'number'){
        var initialSum = arguments[0];

        function innerSum(nextValue) {
            return initialSum + nextValue;
        }
        return innerSum;

    }

}
