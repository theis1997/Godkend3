
var express = require("express");
var app = express();
const PORT = 3000; // her opretter jeg konstanten PORT og tilskriver den værdien 3000

// Her definerer jeg hvor, i mine controller-filer mine constants (user, interests og match) skal hente/tilgå deres tilhørende hardcodede data.
const user = require("./Controllers/Users.js");
const interests = require("./Controllers/Interest.js");
const match = require("./Controllers/Match.js");

app.get("/Users", user);     // Her definerer vi hvor (hvilken constant) endpointet (User, Interests og Match) skal hente sine data fra. 
app.get("/Match", match);    
app.get("/Interests", interests)



app.listen(PORT); // Her får jeg serveren til at lytte på den angivne port (3000) 
console.log("Server listening on port" + PORT); //Hvis serveren kører skriver den, den angivne string og den angivne port den "lytter" på.
 







