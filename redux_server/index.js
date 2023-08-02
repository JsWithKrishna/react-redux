const express = require("express");
const { connectDB } = require("./config/db");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
connectDB();

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.send("the server is running");
})

app.use("/api/v1",require("./routes/todo.routes"));

app.listen(3256,()=>{
    console.log(`the server is listen at the port 3256`);
})