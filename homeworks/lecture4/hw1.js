// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    let s=[];
    let tagRegex = /<\/?[\w\s="/.':;#-\/]+>/g;
    let tags= html.match(tagRegex)||[];
    for(let tag of tags){
        if(tag.startswith('</')){
            let open= s.pop();
            if (!open || tag.slice(2, -1) !== open.slice(1, -1)) {
                return false;
              }

        }else{
            s.push(tag);
        }
        
    }

    return s.length===0;
}