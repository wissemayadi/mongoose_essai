const Person =require("../models/person");//require person

const express= require("express");
const router= express.Router();


//@Api http:localhost:5000/api/persons
//@desc Add new user
//@access public

router.post("/",(req,res)=>{

  console.log(req.body)
const newPerson= new Person( {...req.body} );

console.log(newPerson)
newPerson
.save()
.then(()=> res.send("new user has been added"))
.catch((err)=>res.send(err));

})


// router.post("/",(req,res)=>{
//   const newPerson= new Person({name:"wissem",age:32,favoriteFoods:["pizza"]});
//   newPerson.save()
//   .then(()=>res.send("user jdide itzed"))
//   .catch((err)=>res.send(err))
  
//   })


// router.post("/personnes",(req,res)=>{
// let arrayP=[{"nom":"wissemayadi","age":23,favoriteFoods:["keftaji"]}
// ,{"nom":"wissemayadi34","age":234,favoriteFoods:["lablebi"]}
// ,{"nom":"wissemayadiboss","age":233,favoriteFoods:["7outt"]}];
// Person.insertMany((arrayP).then(()=>
// res.send("user itzed")).catch((err)=>console.log(err))
// )
// })

//@Api http:localhost:5000/api/persons
//@desc Get all persons
//@access public
router.get("/", (req, res) => {
    Person.find()
      .then((persons) => res.send(persons))
      .catch((err) => res.send(err));
  });

// router.get("/:name",(req,res)=>{
//   let {name}=req.params;
//   Person.find({name}).
//   then((persons)=>res.send(persons)).
//   catch((err)=>res.send(err));
// })
  
module.exports = router;
