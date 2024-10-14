const express = require('express')
const methodOverride = require('method-override')
const app = express()
app.set("view engine", "ejs");
app.set("views", "./template");

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(methodOverride('_method'));

app.use("/board", require("./route/boardRoute"));
app.use("/user", require("./route/userRoute"));
app.use("/student", require("./route/studentRoute"));

app.listen(3000, ()=>{
    console.log("server start!");
})