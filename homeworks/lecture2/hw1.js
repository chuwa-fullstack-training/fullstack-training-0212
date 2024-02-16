
/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for(const property in p)
    {
        o[property] = p[property];
    }
    return o    
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    var obj = {};
    for(const property in p)
    {
        obj[property] = p[property];
    }
    for(const property in o)
    {
        obj[property] = o[property];
    }
    return obj
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for(const property in o)
    {
        if(!(property in p))
        {
            delete o[property]
        }
    }
    
    return o
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    var obj = {};
    for(const property in o)
    {
        if(property in p)
        {
            obj[property] = o[property]
        }
    }

    return obj;
}

/*

var a = {
    name: "ling",
    age: 3,
    title: "student"
}

var b = {
    name: "xiao",
    age: 5,
    address: "some street"
}

console.log(extend(a,b))
a = {
    name: "ling",
    age: 3,
    title: "student"
}

b = {
    name: "xiao",
    age: 5,
    address: "some street"
}

console.log(union(a,b))
var a = {
    name: "ling",
    age: 3,
    title: "student"
}

var b = {
    name: "xiao",
    age: 5,
    address: "some street"
}

console.log(restrict(a,b))
var a = {
    name: "ling",
    age: 3,
    title: "student"
}

var b = {
    name: "xiao",
    age: 5,
    address: "some street"
}

console.log(intersection(a,b))
*/