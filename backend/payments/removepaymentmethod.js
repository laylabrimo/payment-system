let Users=require('../database/schemas/regstrationSchema')
let stripetk=''
const stripe = require('stripe')(stripetk)

let removepaymentmethod=async(id,user)=>{
    var myquery = { email: user.email };
    let userpaymentmethods=await Users.findOne(myquery)
    let upm=userpaymentmethods.finanaces.payment_methods
    let predifinedpm=[]
    upm.map(x=>predifinedpm.push(x))
    console.log('after prefining ',predifinedpm)
    predifinedpm.map(x=>predifinedpm.pop(x.id==id))
    console.log('after deleting ',predifinedpm)
    var newvalues = { $set: {finanaces: {
      payment_methods:
        predifinedpm
      }} };

    Users.findOneAndUpdate(myquery,newvalues,(err,res)=>{
      if (err){
        console.log(err)
      }
      console.log(res)
    })
   
}

module.exports=removepaymentmethod