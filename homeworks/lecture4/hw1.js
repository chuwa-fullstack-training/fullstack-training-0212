// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
     // implement your solution here
    var tagReg = /<[/a-z]*>/ig
  
    var tagMap = new Map()
    for(const tag of html.match(tagReg))
    {
        /*Close tag */
        if(tag.indexOf("/") != -1)
        {
            let openTag = tag.replace("/","")
            if(tagMap.get(openTag))
            {
                tagMap.set(openTag,tagMap.get(openTag) - 1)
            }
            else
            {
                console.log("tag" + openTag + " doesnt match")
                return false;
            }
        }
        else
        {
            if(tagMap.get(tag))
            {
                tagMap.set(tag,tagMap.get(tag) + 1)
            }
            else
            {
                tagMap.set(tag,1)
            }
        }
    
    }

    for(const [key, value] of tagMap)
    {
        
        if(value !== 0)
        {
            console.log("Tag " + key + " doesnt match")
            return false;
        }
    }
    return true;
 
   
}
/*Test */
var html2 = "<head><head>"
var html = "<html><head><head><title><title>My Title</title></title></head></head></html>"
console.log(checkValidHTML(html2))