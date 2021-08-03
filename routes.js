const express = require("express");
const router = express.Router();
const faker = require("faker");

let db = require("./db");

router.get('/',(req,res)=>{
    res.render('pages/home');
});

module.exports = router;