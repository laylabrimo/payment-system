let Users=require('../database/schemas/regstrationSchema')
let stripetk=''
const stripe = require('stripe')(stripetk)

let addpaymenmethod=async(data)=>{
  let err=''
  let resp=''
    const paymentMethod = await stripe.paymentMethods.create({
        type: 'card',
        card: {
         
          number: data.cardnumber,
          exp_month: data.expm,
          exp_year: data.expy,
          cvc: data.cvc,
          
        },
      }) 
      .then((res)=>{
        resp=res
      })
      .catch((e)=>{
       err=e.message
      })
  if (err){
    return err
  }
  else{
    return resp
  }
}


module.exports=addpaymenmethod