const Person =require("../models/person");//require person

const express= require("express");
const router= express.Router();


//@Api http:localhost:5000/api/persons
//@desc Add new user
//@access public

router.post("/",(req,res)=>{
const newPerson= new Person({ ...req.body });
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

//@Api http:localhost:5000/api/persons
//@desc Get all persons
//@access public
router.get("/", (req, res) => {
    Person.find()
      .then((persons) => res.send(persons))
      .catch((err) => res.send(err));
  });

router.get("/:name",(req,res)=>{
  let {name}=req.params;
  Person.find({name}).
  then((persons)=>res.send(persons)).
  catch((err)=>res.send(err));
})
  
module.exports = router;
