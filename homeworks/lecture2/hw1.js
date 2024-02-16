/*
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is overwritten.
 * This function does not handle getters and setters or copy attributes.
 */
function extend(o, p) {
  // implement your code here
  for (const [key, value] of Object.entries(p)) {  
      o[key] = value;
  }
  return o;
}
var o = { a: 1, b: 2, c: 3, d: 4 };
var p = { b: 11, c: 22, e: 44, f: 55};
console.log("question1:")
console.log("Beginning o:", o); 
console.log("Beginning p:", p); 
var ansQ1= extend(o, p);
console.log("result:", ansQ1); 
console.log("--------------------------------------------------");

/*
 * Return a new object that holds the properties of both o and p.
 * If o and p have properties by the same name, the values from o are used.
 */
function union(o, p) {
  // implement your code here
  var result = {...p,...o};

  return result
}

var o = { a: 1, b: 2, c: 3, d: 4 };
var p = { b: 11, c: 22, e: 44, f: 55};
console.log("question2:")
console.log("Beginning o:", o); 
console.log("Beginning p:", p); 
var ansQ2= union(o, p);
console.log("result:", ansQ2); 
console.log("--------------------------------------------------");


/*
 * Remove properties from o if there is not a property with the same name in p.
 * Return o.
 */
function restrict(o, p) {
  // implement your code here
  Object.keys(o).forEach(key =>{
    if (!p.hasOwnProperty(key)){
        delete o[key]
    }

  } )

  return o

  }

var o = { a: 1, b: 2, c: 3, d: 4 };
var p = { b: 11, c: 22, e: 44, f: 55};
console.log("question3:")
console.log("Beginning o:", o); 
console.log("Beginning p:", p); 
var ansQ3= restrict(o, p);
console.log("result:", ansQ3); 
console.log("--------------------------------------------------");




/*
 * Return a new object that holds only the properties of o that also appear
 * in p. This is something like the intersection of o and p, but the values of
 * the properties in p are discarded
 */
function intersection(o, p) {
  // implement your code here
  var res = {}
  Object.entries(o).forEach(([key, val]) =>{
    if (p.hasOwnProperty(key)){
        res[key]= val      
    }

  } )

  return res

}

var o = { a: 1, b: 2, c: 3, d: 4 };
var p = { b: 11, c: 22, e: 44, f: 55};
console.log("question4:")
console.log("Beginning o:", o); 
console.log("Beginning p:", p); 
var ansQ4= intersection(o, p);
console.log("result:", ansQ4); 
console.log("--------------------------------------------------");
