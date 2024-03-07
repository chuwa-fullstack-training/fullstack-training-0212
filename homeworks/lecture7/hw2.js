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
const http = require("http");
const url = require("url");
const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true);
  const isoTime = parsedURL.query.iso;
  const date = new Date(isoTime);
  const result = {};

  if (parsedURL.pathname === "/api/parsetime") {
    res.writeHead(200, { contentType: "application/json" });
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
  }
  if (parsedURL.pathname === "/api/unixtime") {
    res.writeHead(200, { contentType: "application/json" });
    result = {
      unixtime: date.getTime(),
    };
  }
  res.end(JSON.stringify(result));
});

server.listen(PORT, () => {
  console.log("Server is running on port 3000.");
});
