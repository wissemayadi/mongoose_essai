const mongoose= require("mongoose");
const config = require("config");



const connectDB=()=>{

    mongoose
.connect(
    config.get("MONGO_URI"),
{
useNewUrlParser:true,
useUnifiedTopology:true,


}
)
.then(()=> console.log('Connected to MongoDB'))
.catch((err)=>console.log('failed  to connect to MongoDB',err));
}

module.exports=connectDB

