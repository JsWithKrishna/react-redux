const express = require("express");
const TodoController = require("../controllers/Todo.controller");
const router = express.Router();


router.route("/todo")
.get(TodoController.getTodos)
.post(TodoController.createTodo)




router.route("/todo/:id")
.get(TodoController.getTodoById)
.delete(TodoController.deleteTodoById)

module.exports = router;