// require moment module for modify Date format
const moment = require('moment');

// REQUIRING MODEL FOR CREATING TODOS
const todo = require('../model/todo_model')

// Home Controller
module.exports.home = function(req, res){

    todo.find({}).then(todo => {
        return res.render('home',{
            title: "Todo App",
            todo_data: todo,
            moment: moment
        })
    })
    
}

// Create controller
module.exports.createTodo = function(req, res){
    todo.create({
        input: req.body.input,
        categories: req.body.categories,
        date: req.body.date
    }).then(() => {
        return res.redirect('back')
    }).catch(err => {
        console.log(err)
    })
    
    
}

// Delete controller
module.exports.deleteTodo = function(req, res){
    const id = req.query;
    const count = Object.keys(id)
    for (let id of count) {
        todo.findByIdAndDelete(id).then(()=>{
            return res.redirect('back')
        }).catch(err=>{
            console.log(err)
        })
        
    }
    
}