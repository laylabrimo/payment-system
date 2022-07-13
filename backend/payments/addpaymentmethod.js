let Users=require('../database/schemas/regstrationSchema')
let stripetk=''
const stripe = require('stripe')(stripetk)

let addpaymenmethod=async(data)=>{
  let err=''
  let resp=''
  console.log('in ad method',data)
   await stripe.paymentMethods.create({
        type: 'card',
        card: {
         
          number: data.cardnumber,
          exp_month: data.expm,
          exp_year: data.expy,
          cvc: data.cvc,
         
          
        },
        billing_details:{
          name:data.name
        }
      }) 
      .then((res)=>{
        resp=res
      })
      .catch((e)=>{
        throw new Error(e.message);
      })
      console.log('kudarka ',err,resp)
  if (err){
    return err
  }
  else{
    return resp
  }
  
}


module.exports=addpaymenmethod