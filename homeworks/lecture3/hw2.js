/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(...arg) {
    // implement here
    if(arg.length>1){
        var res=0;
        for (var i = 0; i < arg.length; i++) {
            res += arg[i];
        }
        return res;
    }else if(arg.length===1&& typeof arg[0] === 'number'){
        var initialSum = arg[0];

        function innerSum(nextValue) {
            return initialSum + nextValue;
        }
        return innerSum;

    }

}
