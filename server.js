const express=require('express');

// const bodyParser=require('body-parser');
// require('dotenv').config({path:'./config/'})
const connectDB= require('./config/connectDB');
const app =express();

app.use("/api/persons", require("./routes/person"));

app.use(express.json());

connectDB();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

const port =process.env.PORT|| 5000;

app.listen(port,(err)=>{
    err 
    ? console.log(err)
    : console.log(`the server is running on ${port}`);
})