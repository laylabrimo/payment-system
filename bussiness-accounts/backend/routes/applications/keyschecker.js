// keys checker will be dynamic and will be used to check if the keys are valid
let router=require('express').Router()
let applications=require('../../db/schemas/Appschema')
let generatetoken=require('../../helpers/tokens').generatetoken

router.post(`/:publishkey`,async(req,res)=>{
    let publishkey=req.params.publishkey
    let secretkey= req.body.secretkey
    console.log('waa lisoo codasaday')
    let app=await applications.findOne({"appsecretssecrets.publishkey":publishkey})
    if(app!=null){
        if(app.appsecretssecrets.Secretkey==secretkey){
            // add this request to the app requests array
            let request={
                requestdate:new Date().toISOString(),
                requesttype:'key checking',
                   
            }
            let resp=await applications.updateOne({appid:app.appid},{$push:{apprequests:request}})
            // generate token
            let token=await generatetoken(app.appid,secretkey,'key checking')
            res.send({
                status:'success',
                message:'great you have successfully connected to'+app.appname,
                token:token
            })
        }
        else{
            res.send({
                status:'error',
                message:'keys are invalid'
            })
        }
    }
    else{
        res.send({
            status:'error',
            message:'keys are invalid'
        })
    }
   


})
module.exports=router;