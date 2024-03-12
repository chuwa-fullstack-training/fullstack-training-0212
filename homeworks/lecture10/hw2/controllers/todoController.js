const express = require('express');
const Todo = require("../models/todoModel");


const getAllTodo = async (req,res)=>{
    const todos = await Todo.find(); 
    console.log(todos) 
    res.render('index', { todos });
} 
const addTodo = async (req, res) => {
    try
    {     
        req.body.done = false;
        console.log(req.body)
        const todo =  new Todo(req.body);
        await todo.save();
        res.json(todo);
    }
    catch(err)
    {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error when creating todo' });
    }
  
  }

  const updateTodo = async (req,res) =>
  {
    console.log("receive put request")
    try {
        const todo = await Todo.findById(req.params?.id).then((body)=>{
            body.done = !(body.done);
          
            return Todo.findByIdAndUpdate(req.params?.id, body);
        });
      
        res.status(200).json(todo);
      } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'Server Error' });
      }
  }

module.exports = {
    getAllTodo,
    addTodo,
    updateTodo
};
