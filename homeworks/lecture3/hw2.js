/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    // implement here
    
    if(!arguments[1]){

        let a = arguments[0]
        
        return function inner(){
            return a+arguments[0]

        }
    }else{
        return arguments[0]+arguments[1]
    }
}


console.log(sum(2)(3) === 5)
console.log(sum(2, 3) === 5)
