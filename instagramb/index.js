const express = require("express")
const app = express()
//mongodb+srv://ig:ig@cluster0.6na27.mongodb.net/
const mongoose = require('mongoose');
const authRoute=require('./routes/Auth')
const cors=require("cors")


app.use(express.json())
app.use(cors())



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://ig:ig@cluster0.6na27.mongodb.net/',console.log("db connected"));

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use("/ig/auth",authRoute)  //localhost:8888/ig/auth

app.listen(8888,()=>{
    console.log("server is running on port 8888")
})