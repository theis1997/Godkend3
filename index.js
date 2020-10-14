/*
var express = require("express"); 
var app = express();
const users = require("/Models/Users.js")
app.use("/Users.js", users);
app.get ("/", function(req,res){

    res.send("Hello World");
});

var server = app.listen(3000, function(){
console.log("server kører");

});

*/












var i = 1;

var express = require("express");
var app = express();

                            // Her definerer vi hvor vores constants (user, interests og match) skal hente/tilgå deres tilhørende hardcodede data.
const user = require("./Controllers/Users.js");
const interests = require("./Model/Users.js")
const match = require("./Model/Users.js")
const PORT = 3000;

app.use(cors());                  
app.use("/Users", user);      // Her definerer vi hvor (hvilken constant) endpointet (User, Interests og Match) skal hente sine data fra.
//app.use("/Interests", interests);     
//app.use("/Match", match);




app.listen(PORT,function(){

});









