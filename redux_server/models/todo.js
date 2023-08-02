const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    }
},{
    timestamps:true
})
const model = mongoose.model("todo",schema);

module.exports = model;