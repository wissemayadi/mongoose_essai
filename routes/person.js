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
//@Api http:localhost:5000/api/persons
//@desc Add new user
//@access public
router.post("/",(req,res)=>{
  const newPerson= new Person({name:"wissemou",age:321,favoriteFoods:["pizza fruit de mer"]});
  newPerson.save()
  .then(()=>res.send("user jdide itzed"))
  .catch((err)=>res.send(err))
  
  })
//@Api http:localhost:5000/api/persons
//@desc Add many user
//@access public

router.post("/personnes",(req,res)=>{
let arrayP=[{"nom":"wissemayadi","age":23,favoriteFoods:["keftaji"]}
,{"nom":"wissemayadi34","age":234,favoriteFoods:["lablebi"]}
,{"nom":"wissemayadiboss","age":233,favoriteFoods:["posisson"]}];
Person.insertMany((arrayP).then(()=>
res.send("user itzed")).catch((err)=>console.log(err))
)
})

//@Api http:localhost:5000/api/persons
//@desc Get all persons
//@access public
router.get("/", (req, res) => {
    Person.find()
      .then((persons) => res.send(persons))
      .catch((err) => res.send(err));
  });

  ///find a person by name
  //localhost:5000/persons/name

router.get("/name/:name",(req,res)=>{
  let {name}=req.params;
  Person.find({name}).
  then((persons)=>res.send(persons)).
  catch((err)=>res.send(err));

})


//@Api http:localhost:5000/api/users/id
//@desc Get user by id
//@access public
router.get("/:_id", (req, res) => {
  let { _id } = req.params;
  //   let id = req.params._id;
  User.find({ _id })
    .then((persons) => res.send(persons))
    .catch((err) => res.send(err));
});

//@//@URL http://localhost/persons/fav
//Use model.findOne() to Return a Single Matching Document from Your Database

router.get("/favoriteFoods/:favorite", (req, res) => {
      
  //get the fav food from the req object
  let food= {...req.params}
  let fav = { favoriteFoods: { $all: [poisson] } }

  //use the find method to find the persons by there favorite food
  Person.findOne(poisson)
  .then((persons) => res.send(persons))
  .catch((err) => res.send(err))
})






//@//@URL http://localhost/persons/id
//Use model.findById() to Search Your Database By _id
router.get("/:_id", (req, res) => {
  let { _id } = req.params;
  Person.find({ _id })
  .then((person) => res.send(person))
  .catch((err) => res.send(err));
});




//@//@URL http://localhost/persons/id
//Perform Classic Updates by Running Find, Edit, then Save
router.put("/update/:name", (req, res) => {
  let { name } = req.params;
  Person.findOneAndUpdate({ name },{$set:{"age":231}},{ new: true })
  .then((person) => res.send(person))
  .catch((err) => res.send(err));
});


//@URL http://localhost:5000/persons/id
//Perform Classic Updates by Running Find, Edit, then Save
router.put("/:_id", (req, res) => {
  let { _id } = req.params;
  Person.findByIdAndUpdate({ _id },{$set:{...req.body}})
  .then(() => res.send("Person Has been Updated"))
  .catch((err) => res.send(err));
});


//@URL http://localhost:5000/persons/id
//Delete One Document Using model.findByIdAndRemove
router.delete("/:_id", (req, res) => {
let { _id } = req.params;
Person.findByIdAndRemove({ _id })
.then(() => res.send(`Person with id = ${ _id} has been deleted`))
.catch((err) => res.send(err));
});




//@URL http://localhost:5000/persons/id
//Delete One Document Using model.deleteMany
router.delete("/", (req, res) => {
let nameToRemove = "wessem";
Person.deleteMany({name:nameToRemove })
.then(() => res.send(`Person with name = ${ nameToRemove} has been deleted`))
.catch((err) => res.send(err));
});


//@URL http://localhost:5000/persons/
//Chain Search Query Helpers to Narrow Search Results
router.get("/", (req, res) => {

let foodToSearch = { favoriteFoods: { $all: ["pizza"] } };

Person.find(foodToSearch).sort({name:'asc'}).limit(2).select({age:0}).exec()
.then((person) => res.send(person))
.catch((err) => res.send(err));
});



  
module.exports = router;
