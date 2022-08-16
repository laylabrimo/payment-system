let verifyheaders=async(req,res,next)=>{
   
    let token=req.headers
    console.log(token)
    if (token){
        next()
    }
    else{
        res.send({
            error:'No token provided'
        })
    }
    
}


module.exports=verifyheaders;