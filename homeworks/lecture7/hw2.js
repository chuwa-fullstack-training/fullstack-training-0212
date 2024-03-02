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
const { stringify } = require('querystring');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    //如果设置为 true，query 属性将包含一个解析后的对象，而不是字符串
    const iso = parsedUrl.query.iso;

    if (req.method === 'GET' && parsedUrl.pathname === '/api/parsetime') {
        const date = new Date(iso);
        const res1 = {
            hour: date.getHours(), 
            minute: date.getMinutes(), 
            second: date.getSeconds(),
        }
        sendRes(res, res1)
    } else if (req.method === 'GET' && parsedUrl.pathname === '/api/unixtime') {
        const date = new Date(iso);
        const res2 = {
            unixtime: date.getTime()
        }
        sendRes(res, res2)
    } else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end('Wrong input');  //结束响应, 在响应结束时发送文本内容 'Wrong input' 到客户端
    }
})

function sendRes(res, data) {
    res.writeHead(200, { contentType: 'application/json' })
    res.end(JSON.stringify(data));
}

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);   
})
