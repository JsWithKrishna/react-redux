const TodoService = require("../services/todo.service");

class TodoController{
        static createTodo = async(req,res)=>{
           const res_obj = await TodoService.createTodo(req.body);
           res.status(201).send(res_obj);
        }
        static getTodos = async(req,res)=>{
            const res_obj = await TodoService.getTodos();
            res.status(200).send(res_obj);
         }
         static getTodoById = async(req,res)=>{
            const res_obj = await TodoService.getTodoById(req?.params?.id);
            res.status(200).send(res_obj);
         }
         static deleteTodoById = async(req,res)=>{
            const res_obj = await TodoService.deleteTodoById(req?.params?.id);
            res.status(200).send(res_obj);
         }
}

module.exports = TodoController;