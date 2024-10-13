const express = require('express')
const app = express()
app.set("view engine", "ejs");
app.set("views", "./template");

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use("/board", require("./route/boardRoute"));

app.listen(3000, ()=>{
    console.log("server start!");
})