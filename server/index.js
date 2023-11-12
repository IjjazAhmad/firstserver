const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

let mongo_URL = "mongodb+srv://ijjazahmad:2020mongodb@cluster0.hx9s8tj.mongodb.net/todo?retryWrites=true&w=majority"
mongoose.connect(mongo_URL)

const app = express()
app.use(cors())
app.use(express.json())


app.post("/addTodo", (req, res)=>{
    const {body} = req;
    console.log("🚀 ~ file: index.js:8 ~ app.post ~ body:", body)

    res.send("Data recived")

})

const PORT = 8000;

app.listen(PORT,()=>{
    console.log(PORT);
    console.log("Hello server is runing");
})