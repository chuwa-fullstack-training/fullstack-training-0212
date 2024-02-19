/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    for(var prop in p){ // Iterate over all properties in p
        if(p.hasOwnProperty(prop)){ // Check if p has the property (not from the prototype chain)
            o[prop] = p[prop]; // Copy or overwrite the property into o
        }
    }
    return o; // Return the modified object o
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    var result = {}; // create a new empty object
    for(var prop in p){
        if(p.hasOwnProperty(prop)){
            result[prop] = p[prop]; // copy all the props in p and save it to result
        }
    }

    for(var prop in o){
        if(o.hasOwnProperty(prop)){
            result[prop] = o[prop]; // copy all the props in o and save it to result and overwrite the same props if existed in p
        }
    }

    return o;
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    for(var prop in o){ // iterate all the props in o
        if(o.hasOwnProperty(prop)){  // check if there is a valid prop in o directly
            if(!p.hasOwnProperty(prop)){ // check if this prop exists in p
                delete o[prop]; // if not, delete this prop in o
            }
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
    var result = {};
    for(var prop in o){ // iterate all the props in o
        if(o.hasOwnProperty(prop) && p.hasOwnProperty(prop)){ // check if the value of this prop also exists in p
            result[prop] = o[prop]; // copy the value of prop from o into the new object
        }
    }

    return result;
}