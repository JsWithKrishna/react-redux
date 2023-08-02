const { TodoModel } = require("../models")

class TodoService{
        static createTodo = async(body)=>{
                    if(!body.title || !body.description){
                        throw new Error("title and description must be required")
                    }

            await TodoModel.create({
                title:body.title,
                description:body.description,
            })
            return {
                msg:"todo is created"
            }
        }
        static getTodos = async()=>{
            const todo = await TodoModel.find({});
            return {
                msg:"fetch success",
                todos:todo
            }
        }
        static getTodoById = async(id)=>{
            const todo = await TodoModel.findById(id);
            if(!todo){
                return {
                    msg:"no todo found"
                }
            }
            return {
                msg:"fetch success",
                todo
            }
        }
        static deleteTodoById = async(id)=>{
            const todo = await TodoModel.findByIdAndDelete(id);
            if(!todo){
                throw new Error("No todo Found")
            }
            return {
                msg:"delete success"
            }
        }
}


module.exports=TodoService