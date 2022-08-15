let accounts=require('../../db/schemas/registerschema')
let router=require('express').Router()
router.post('/',async(req,res)=>{
    let {businessid,password}=req.body.data;
    let result=await accounts.findOne({businessid})
    if(result){
        if(result.password===password){
            res.send(result)
        }
        else{
            res.send('wrong password')
        }
    }
    else{
        res.send('no account found')
    }
} )
module.exports=router;


