var express = require("express"); 
var router = express.Router();
const User = require("../Models/Users.js")


router.get("/", (req, res) => {

res.send("/Users virker");

})

module.exports = router;
