
var express = require("express");
var app = express();
const PORT = 3000;

// Her definerer vi hvor vores constants (user, interests og match) skal hente/tilgå deres tilhørende hardcodede data.
const user = require("./Controllers/Users.js");
const interests = require("./Controllers/Interest.js");
const match = require("./Controllers/Match.js");

app.get("/Users", user);     // Her definerer vi hvor (hvilken constant) endpointet (User, Interests og Match) skal hente sine data fra. 
app.get("/Match", match);    
app.get("/Interests", interests)



app.listen(PORT);
console.log("Server listening on port" + PORT); //Hvis serveren kører skriver den den angivne string og den angivne port den "lytter" på.
 







