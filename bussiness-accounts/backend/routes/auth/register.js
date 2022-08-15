let router= require('express').Router()
let Registerschema=require('../../db/schemas/registerschema')
let makeid = require('../../helpers/makeid')

router.post('/',async(req,res)=>{
  console.log(req.body)
let {
  businessname,
  businessaddress,
  business_registration_number,
  businessphone,
  businessemail,
  businesswebsite,
  businessdescription,
  business_owner_name,
  password1
}=req.body.data;
  let data={
    businessid: 'B'+makeid(10),
     businessname,
    businessaddress,
   business_registration_number,
   businessphone,
   businessemail, 
   businesswebsite,
  businessdescription,
  business_owner_name,
    refrences: {
      vercode:null,
      
    },
    payout: [],
    business_logo: '',
    customers: [],
    business_status: 'active',
    business_type: '',
    business_category: '',
    businesspassword: password1,
}
let newRegister=new Registerschema(data)
try{
  let result=await newRegister.save()
  res.send(result)
  console.log(result)
}
catch(err){
  console.log(err.message)
  res.send(err.message)
}

 
})
module.exports=router