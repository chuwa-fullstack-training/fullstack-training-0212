const express = require('express');
const mongoose = require('./connect.js');
const path = require('path');
const app = express();

const todoRouter = express.Router();
const Todo = require('./schema')

// Set up view engine
app.use(express.static("public")); 
//告诉 Express.js 服务器，在访问静态资源时，应该查找并提供位于项目根目录下的 public 文件夹中的文件。这通常包括样式表、客户端脚本等静态资源。
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Set up middleware
app.use(express.urlencoded({ extended: true }));  
app.use(express.json());

todoRouter.get('/', async(req, res) => {
    try {
        const todos = await Todo.find();
        res.render('index', {todos});  
        //rendering the 'index'(pug name, main view) view and passing the 'todos' data to the view.
        // res.render(view [, locals] [, callback]), 2nd param is obj
    } catch (e) {
        console.error(e);
        res.status(500).send('Server Error')
    }
})
  
// Add a new todo
todoRouter.post('/todos', async (req, res) => {
const newTodo = new Todo({ todo: req.body.todo, completed: false }); //todo 是你在前端代码中定义的属性名, jsonfy
try {
    await newTodo.save();
    res.json({ message: 'Todo added successfully' });
} catch (error) {
    res.status(500).json({ error });
}
});

// Mark a todo as completed
todoRouter.put('/todos/:id', async (req, res) => {
const todoId = req.params.id;
try {
    const todoI = await Todo.findById(todoId);
    todoI.done = !todoI.done
    await todoI.save();
    res.json({ message: 'Todo marked as completed' });
} catch (error) {
    res.status(500).json({ error });
}
});

app.use('/api', todoRouter)

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})
