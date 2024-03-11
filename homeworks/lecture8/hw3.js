/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */


const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.post('/', (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    let html = '';
    const htmlpath = path.join(__dirname, 'home.html');
    html =  fs.readFileSync(htmlpath, 'utf8');
    const updatedHtml = html.toString().replace('</body>', `<p>Title: ${title}</p><p> Content: ${content}</p></body>`);

    res.send(updatedHtml);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
