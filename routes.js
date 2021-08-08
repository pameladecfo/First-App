const express = require("express");
const router = express.Router();
//const faker = require("faker");

let db = require("./db");

router.get('/',(req,res)=>{
    res.send('Minha Página Home!!');
});
  router.get('/about', ()=>{
      res.send('Minha página Sobre');
  });
  
module.exports = router;