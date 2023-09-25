// Require important module
const express = require('express');
const homeController = require('../controller/home_controller')

// Create Express Router
const router = express.Router();

// calling controller
router.get('/', homeController.home)
router.post('/create-todo', homeController.createTodo)
router.get("/delete-todo", homeController.deleteTodo)




module.exports = router