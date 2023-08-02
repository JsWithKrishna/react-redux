const { default: mongoose } = require("mongoose")

exports.connectDB = async ()=>{
   await mongoose.connect(`mongodb://127.0.0.1/todo-youtube`);
        console.log(`the db is connect with ${mongoose.connection.host}`)
} 

