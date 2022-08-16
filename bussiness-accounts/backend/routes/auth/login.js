let accounts=require('../../db/schemas/registerschema');
const { generatetoken } = require('../../helpers/tokens');
let router=require('express').Router()
router.post('/',async(req,res)=>{
    let data=req.body;
    console.log(data)
    //login and generate token
    let account=await accounts.findOne({businessid:data.data.bussinessnumber})
    if(account !=null){
        console.log('account found',account.password,data.data.password)
        if(account.businesspassword==data.data.password){
            let token=generatetoken(account)
            res.send({
                token
            })
        }else{
            res.send({
                error:'Invalid Password'
            })
        }

        
    }
    else{
        res.send({
            error:'we cant find your account please register ' 
        })

    }
    
    
 
   
} )
module.exports=router;


