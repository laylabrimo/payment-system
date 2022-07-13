let stripetk=''
const stripe = require('stripe')(stripetk)
let Users=require('../database/schemas/regstrationSchema')

let assignpaymentmethodtouser=async(paymentmethod,user)=>{

await stripe.paymentMethods.attach(
    paymentmethod.id,
    {customer: user}
  )
  .then(async()=>{
    var myquery = { cus_id: user };
    let userka= await Users.findOne(myquery)
    let userpaymentmethods=userka.finanaces.payment_methods
    userpaymentmethods.push(paymentmethod)
    console.log(userpaymentmethods)
    var newvalues = { $set: {'finanaces.payment_methods':userpaymentmethods} };
    Users.findOneAndUpdate(myquery,newvalues,(err,res)=>{
      if (err){
        console.log(err)
      }
      console.log(res)
    })
  })
  .catch(e=>{
      throw new Error(e.message)
  })


}
module.exports=assignpaymentmethodtouser