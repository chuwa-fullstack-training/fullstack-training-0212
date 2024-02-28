/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for(var property in p){
        o[property] = p[property];
    }
    return o;
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    var new_obj = {};

    for (var property in o){
        new_obj[property] = o[property];
    }

    for (var property in p){
        if (new_obj[property] === undefined || new_obj[property] === null) {
            new_obj[property] = p[property];
        }
    }

    return new_obj;
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for (var property in o){
        if(!(property in p)){
            delete o[property];
        }
    }
    return o;
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    var new_obj = {};

    for (var property in o){
        if (property in p){
            new_obj[property] = o[property];
        }
    }
    return new_obj;
}