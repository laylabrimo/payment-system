const express = require("express");
const  uloadfiletos3= require('../aws/uploadfiles')
const router = express.Router();
let connectdatabase = require("../database/dbconnect");
let User = require("../database/schemas/regstrationSchema");
connectdatabase;

router.post('/',(req,res)=>{
    const newpath = './files/'
    console.log(__dirname )
    
    console.log(newpath)
    const file = req.files.file;
    const filename = file.name;
    file.mv(`${newpath}${filename}`, async(err) => {
        if (err) {
          console.log(err.message)
        }
       
        console.log('successfully uploaded')
        await uloadfiletos3('daahqaad-user-documents','./files/'+filename)
        res.json({
          msg:'ok'
        })
       
       
        

        
       
      });    
     



})
module.exports=router