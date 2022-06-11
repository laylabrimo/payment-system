const express = require("express");
const { isDate } = require("moment");
const router = express.Router();
let connectdatabase = require("../database/dbconnect");
let User = require("../database/schemas/regstrationSchema");
connectdatabase;

router.post('/',(req,res)=>{
    let {email,password,location}= req.body.data
    let {ip,country}=location
    
    let user = User.find({email:email})

    

})