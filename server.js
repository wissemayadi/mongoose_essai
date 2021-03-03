const express=require('express');


require('dotenv').config({path:'./config/'})
const connectDB= require('./config/connectDB');
const app =express();


app.use(express.json());

app.use("/api/persons", require("./routes/person"));


connectDB();


const port =process.env.PORT|| 5000;

app.listen(port,(err)=>{
    err 
    ? console.log(err)
    : console.log(`the server is running on ${port}`);
})