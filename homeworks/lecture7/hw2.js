/**
 * Implement a HTTP server that serves JSON data where user requests /api/parsetime and /api/unixtime.
 * For example, when the user requests /api/parsetime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing only 'hour', 'minute' and 'second' properties.
 * {
 *  "hour": 12,
 *  "minute": 34,
 *  "second": 56
 * }
 * Similarly, when the user requests /api/unixtime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing a 'unixtime' property.
 * {
 *  "unixtime": 1684758896789
 * }
 *
 * HINTS:
 * 1. Use url.parse() method to parse URL strings.
 * 2. response.writeHead(200, { contentType: 'application/json' })
 */

// your code here
const http = require('http');
const PORT = 3000;
const urlModule = require('url'); 

const server = http.createServer((req, res) => {
    const {url, method } = req;
    var response =""
    if(url)
    {
        var parsedUrl = urlModule.parse(url,true)
        console.log(parsedUrl.pathname)
        if(parsedUrl.pathname === "/api/parsetime")
        {
            if(parsedUrl.query.iso)
            {
                var date = new Date(parsedUrl.query.iso)
                console.log(parsedUrl.query.iso)
                console.log(date.toString())
               
                response = JSON.stringify( {
                    "minute": date.getMinutes(),
                    "hour": date.getHours(),
                    "second": date.getSeconds()
                });
            }
        }
        else if(parsedUrl.pathname === "/api/unixtime")
        {
            if(parsedUrl.query.iso)
            {
              
                response = JSON.stringify( {
                    "unixtime": Date.parse(parsedUrl.query.iso)
                });
            }    
        }
        else
        {
            response = "404";
        }
        res.writeHead(200, { contentType: 'application/json' })
        res.end(response);
    }
    else
    {
        res.end("Hi");
    }
  
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
