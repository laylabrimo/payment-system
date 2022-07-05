
let stripetk=''

const stripe = require('stripe')(stripetk)
let createcustomer=async(user)=>{
    const customer = await stripe.customers.create({
       email:user.email,
       name:user.name,
       phone:user.phone,
       balance:0,

      });
      return customer
}
module.exports=createcustomer