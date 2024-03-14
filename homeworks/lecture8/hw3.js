/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const fs = require("fs");
const express = require('express');
const path = require("path");

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "views"));   

// Set up middleware
app.use(express.urlencoded({extended:true}));  
app.use(express.json());   //middleware to parse incoming JSON data

app.get('/', (req, res) => {
    res.send('Homepage')
})
app.get('/about', (req, res) => {
    res.send('About Page')
})

app.use((req, res, next) => {
    if (req.url.startsWith('/home.html')) {
      // 处理 "/home.html" 或以 "/home.html" 开头的请求
      const parsedUrl = url.parse(req.url, true);
      const title = parsedUrl.query.title || '';
      const content = parsedUrl.query.content || '';
  
      fs.readFile(path.join(__dirname, 'home.html'), (err, html) => {
        if (err) {
          res.status(500).send('server error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          html = html
            .toString()
            .replace('{{title}}', title)  //将 HTML(home.html)字符串中的 {{title}} 占位符替换为 title 变量的值
            .replace('{{content}}', content);
          res.write(html);
          res.end();
        }
      });
    } else {
      next();
    }
  });
  
app.post('/create-post', (req, res) => {
    const title = req.body.title;
    const content = req.body.content;

    res.redirect(302, `/home.html?title=${title}&content=${content}`)
})

app.use('*', (req, res) => { 
    res.status(404).send('Not Found');
})

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
