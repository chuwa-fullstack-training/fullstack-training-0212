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

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const iso = parsedUrl.query.iso;
  const type = parsedUrl.pathname.split('/');
  const dateObject = new Date(iso);

  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (type[type.length - 1] === 'parsetime') {
    const formattedTime = {
      "hour": dateObject.getUTCHours(),
      "minute": dateObject.getUTCMinutes(),
      "second": dateObject.getUTCSeconds()
    };
    res.end(JSON.stringify(formattedTime));
  } else if (type[type.length - 1] === 'unixtime') {
    const unixTimestamp = dateObject.getTime();
    const unixTimeObj = {
      "unixtime": unixTimestamp
    };
    res.end(JSON.stringify(unixTimeObj));
  } else {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Invalid endpoint' }));
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
