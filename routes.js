const express = require('express');

var router = express.Router();

router.get("/", function(req,res){
    console.log("On start page");
    res.render("index");
});

module.exports = router;