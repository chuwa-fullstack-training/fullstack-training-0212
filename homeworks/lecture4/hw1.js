// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    let startTag = /<\w*>/g
    let endTag = /<\/\w*>?/g
    let ends = html.match(endTag)
    let starts = html.match(startTag)
    // console.log(starts,ends)
    if (ends.length !== starts.length){
        return false
    } else {
        for (let i= 0; i< ends.length; i++){
            // console.log(starts[i].replace("<",'').replace(">",''),ends[ends.length-1-i].replace('</', '').replace('>', ''))
            if(starts[i].replace("<",'').replace(">",'')!== ends[ends.length-1-i].replace('</', '').replace('>', '')){
                return false
            }
        }

        return true
    }
}

let ex1 = "<html><head><title>My Title</title></head></html>"
let ex2 = "<html><head><title>My Title</title></head></head></html>"
let ex3 = "<html><head><title>My Title</title></head></html"

console.log(checkValidHTML(ex1))
console.log(checkValidHTML(ex2))
console.log(checkValidHTML(ex3))