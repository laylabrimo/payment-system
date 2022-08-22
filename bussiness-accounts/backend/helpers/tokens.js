let jwt=require('jsonwebtoken')
let secret='mysecret' 
let generatetoken=(data,exp_time)=>{
    let token=  jwt.sign({
        data
    },secret,{expiresIn:exp_time})
    return token
}
let verifytoken=(token)=>{
    console.log('in the verification',token)
    let data= jwt.verify(token,secret)
    return data
}
let getuser=(token)=>{
    let data=verifytoken(token)
    return data
}

module.exports={
    generatetoken,
    verifytoken,
    getuser
}
