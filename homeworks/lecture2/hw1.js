/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for (const key in p) {
        o[key] = p[key];
    }
    return o;
}

// let o = {0: "!!!!", 2:"twwo"};
// let p = {0: "zero", 1:"one???"};
// console.log(extend(o, p));

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    let res = {};
    for(const key in p) {
        res[key] = p[key];
    }
    for(const key in o) {
        res[key] = o[key];
    }
    return res;
}
// let o = {0:"a", 1:"b"};
// let p = {1: '???', 2:'c', 3:'d'};
// console.log(union(o, p));

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for(const key in o) {
        if(!(key in p)) {
            delete o[key];
        }
    }
    return o;
}
// let o = {0:"a", 1:"b", 'M': 'm'};
// let p = {1: '???', 2:'c', 3:'d'};
// console.log(restrict(o, p));

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    const res = {};
    for(const key in o) {
        if(key in p) {
            res[key] = o[key];
        }
    }
    return res;
}
// let o = {0:"a", 1:"b", 2: 'm'};
// let p = {1: '???', 2:'c', 3:'d'};
// console.log(intersection(o, p));