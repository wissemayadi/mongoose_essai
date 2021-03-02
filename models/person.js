const mongoose = require ('mongoose');
const schema = mongoose.Schema; 

const personSchema= new schema ({

name :{ type :String
    },

age:{type:Number},
favoriteFoods : [{type:String}]
})


module.exports =Person= mongoose.model("person", personSchema);