let Users=require('../database/schemas/regstrationSchema')
let stripetk=''
const stripe = require('stripe')(stripetk)
let deposit=async(data)=>{
let user=data.user.data.data.userka
let depositinfo=data.depositinfo
let ammount=depositinfo.ammount
let userka=await Users.findOne({email:user.email})
let prefiousammount=userka.finanaces.blance
let prefiouspaymentmethods=userka.finanaces.payment_methods
let newblance =parseInt(prefiousammount)+ammount
console.log('prefious ',prefiousammount)
console.log('new blance ',newblance)
var myquery = { email: user.email };
console.log(userka.cus_id)


let chargeuser=async(amount)=>{
  const charge = await stripe.charges.create({
    amount: amount*100,
    currency: 'usd',
    description: 'depost my wallet',
    customer:userka.cus_id,
   
  });
  console.log(charge.status)
}
chargeuser(7000).then(()=>{
  var newvalues = { $set: {finanaces: {blance:newblance,payment_methods:prefiouspaymentmethods}} };
Users.findOneAndUpdate(myquery,newvalues,(err,res)=>{
  if (err){
    console.log(err)
  }
  console.log(res)
})
})
.catch((e)=>{
  console.log('error ',e.message)
})


}

module.exports=deposit