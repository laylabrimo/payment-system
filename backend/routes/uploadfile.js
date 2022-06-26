const express = require("express");
const  uloadfiletos3= require('../aws/uploadfiles')
const router = express.Router();
let connectdatabase = require("../database/dbconnect");
let User = require("../database/schemas/regstrationSchema");
const isdocument = require("../resources/documentchecker");
connectdatabase;

router.post('/',async(req,res)=>{
    const newpath = './files/'
    
    
   
    const file = req.files.file;
    const filename = file.name;
    await file.mv(`${newpath}${filename}`, async(err) => {
        if (err) {
          console.log(err.message)
        }
       
       
        })
        await uloadfiletos3('our-final-project','./files/'+filename)
        .then((x)=>{
          console.log(x)
          
          
        })
        let filj='cuseeb.jpg'
        console.log('cuseeb.jpg'===filj)
        isdocument('our-final-project','dr.jpg')
          .then(x=>console.log('jawaabta waa',x))
 
       
       
       
       
       
        

        
       
    
     



})
module.exports=router