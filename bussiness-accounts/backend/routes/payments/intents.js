let router=require('express').Router();
let createpaymentintent=require('../../resources/create_intent')
// paymentIntent is the payment intent object and bussiness accounts can only generate it

router.post('/genarete',async(req,res)=>{
   /*
    * expected body is - bussiness-id - amount -reason 
   */
   let {bussiness_id,amount,reason}=req.body;
   let resp=await createpaymentintent({
      bussiness_id,amount,reason
   });
   res.send(resp);


   


})
module.exports=router;