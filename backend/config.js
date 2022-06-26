
let getkeys=(type)=>{
require('dotenv').config()
let keys={
    aws_accesskey:process.env.AWS_ACCESS_KEY,
    aws_secretkey:process.env.AWS_SECRET_KEY
}
if (type=='access'){
    return keys.aws_accesskey
}
else{
    return keys.aws_secretkey
}

}
module.exports=getkeys