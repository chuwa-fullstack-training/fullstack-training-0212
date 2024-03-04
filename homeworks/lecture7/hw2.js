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
const query = require('querystring');
const { json } = require('express');

const server = http.createServer((req, res) => {
    res.writeHead(200, { contentType: 'application/json' });
    const isoTime = url.parse(req.url, true).query['iso'];
    const date = new Date(isoTime);
    let t = {};
    if(req.url.startsWith('/api/parsetime')) {
        t = {
                "hour": date.getUTCHours(),
                "minute": date.getUTCMinutes(),
                "second": date.getUTCSeconds()
        };
    } else if(req.url.startsWith('/api/unixtime')) {
        t = {
            "unixtime": Math.floor(date),
        };
    }
    res.end(JSON.stringify(t));
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})