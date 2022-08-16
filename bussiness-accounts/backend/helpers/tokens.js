let jwt=require('jsonwebtoken')
let secret='mysecret' 
let generatetoken=(data)=>{
    let token=  jwt.sign({
        data
    },secret,{expiresIn:'1h'})
    return token
}
let verifytoken=(token)=>{
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
