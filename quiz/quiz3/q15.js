/* Create a function named allGreaterThanThree which accepts an unspecified number of integer arguments and returns true only if all passed arguments are greater than 3.
For example:

allGreaterThanThree(1, 3, 5) should return false

allGreaterThanThree(4, 6) should return true */

const allGreaterThanThree=(...arg)=>{
    const greater= arg.filter((val)=>val>3);
    return greater.length===arg.length;
}

/* const allGreaterThanThree = (...args) => {
    return args.every(val => val > 3);
}; */