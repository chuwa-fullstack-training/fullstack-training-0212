/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const url = require('url');

const app = express();
const port = 3000;

const hw1Router = express.Router();  //创建模块化、可挂载的路由处理器。通过创建一个 Router 实例
hw1Router.get('/:dir/:ext', (req, res) => {
    const directory = path.join(__dirname, req.params.dir); 
    const extension = `.${req.params.ext}`;

    fs.readdir(directory, (err, files) => {   //读取该目录下的文件列表 -> files
        if (err) {
            res.status(404).send(err.message);
        }
        files.forEach((file) => {
            if(path.extname(file) === extention) {
                console.log(file);
            }
        })
    
})

const hw2Router = express.Router();
hw2Router.get('/api/parsetime', (req, res) => {  
    const parsedUrl = url.parse(req.url, true);
    const iso = parsedUrl.query.iso;
    const date = new Date(iso);
    const res1= {
        hour: date.getHours(), 
        minute: date.getMinutes(), 
        second: date.getSeconds(),
    }
    sendRes(res, res1);
})

hw2Router.get('/api/unixtime', (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const iso = parsedUrl.query.iso;
    const date = new Date(iso);
    const res2 = {
        unixtime: date.getTime()
    }
    sendRes(res, res2)
})

function sendRes(res, data) {
    res.status(200).json(data);
}

// Use routers in the main app
app.use('/hw1', hw1Router)   // 将现成的路由模块挂载到路径 /custom
app.use('/hw2', hw2Router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
