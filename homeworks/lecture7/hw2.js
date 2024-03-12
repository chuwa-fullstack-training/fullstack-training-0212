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
const url = require('url');
const PORT = 3300;

const server = http.createServer(
(req, res) =>{
    const { pathname, query } = url.parse(req.url, true);
    if(req.method==='GET'){
        
        if(pathname ==='/api/parsetime'){
            
            const currentDate = new Date();
            const jsonResponse = {
                "hour":currentDate.getHours(),
                "minute":currentDate.getMinutes(),
                "second":currentDate.getSeconds()
            };
            const jsonString = JSON.stringify(jsonResponse);
            res.writeHead(200, { contentType: 'application/json' })
            res.end(jsonString);
        }
        if(pathname ==='/api/unixtime'){
            
            const jsonResponse = {
                "unixtime":Date.now()
            };

            const jsonString = JSON.stringify(jsonResponse);
            res.writeHead(200, { contentType: 'application/json' })
            res.end(jsonString);
        }
    }


}

);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
process.stdin.resume();