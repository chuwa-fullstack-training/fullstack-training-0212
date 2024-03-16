/**
 * For sample code web-server.js, make the following changes:
 * Once submitting in home.html, stay on the same page and display the submitted data.
 * 
 * Hint:
 * 1. put the data of the submitted form in the query string of the url
 * 2. before res.end() in POST method, redirect to the home.html page with the query string
 *  - i.e. res.statusCode = 302; res.setHeader('Location', '/home.html?name=John&age=20');
 * 3. you need to figure out how to parse the query string in the home.html page
 * 4. after writing the html content, you need to write the query string in the html as well
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const urlModule = require('url');

const server = http.createServer((req, res) => {
    const { url, method } = req;
    const parsedUrl = urlModule.parse(url, true);
    const pathName = parsedUrl.pathname;
    const query = parsedUrl.query;


    if (method === 'GET') {
        if (pathName === '/') {
            res.end('this is the home page');
        } else if (pathName === '/about') {
            res.end('this is the about page');
        } else if (pathName.startsWith('/home.html')) {
            fs.readFile(path.join(__dirname, 'home.html'), (err, html) => {
                if (err) {
                    res.end('error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    let htmlString = html.toString();
                    if (Object.keys(query).length > 0) {
                        const queryParamsHtml = Object.entries(query).map(([key, value]) => `<p>${key}: ${value}</p>`).join('');
                        htmlString += queryParamsHtml;
                    }
                    res.end(htmlString);
                }
            });
        } else {
            res.end('this is the 404 page');
        }
    } else if (method === 'POST') {
        if (pathName === '/create-post') {
            let body = [];
            req.on('data', chunk => {
                body.push(chunk);
            });
            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                const redirectURL = '/home.html?' + Buffer.concat(body).toString();
                res.statusCode = 302;
                res.setHeader('Location', redirectURL);
                res.end();
            });
        } else {
            res.end('this is the 404 page');
        }
    } else {
        res.end('Unsupported method');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
