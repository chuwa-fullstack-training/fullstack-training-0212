function counter() {
    // implement here
    var value = 0;
    function count(num)
    {
        if(num)
        {
            value += num;
        }
        
        return value;
    }
    return count
}
/*Test Cases */
let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8