
let Paymentintent= require('../db/schemas/intentsschema')
let makeid =require('../helpers/makeid')
var QRCode = require('qrcode')
let fs = require('fs');
const saveImage = require('./uploadimagefrombase64');

 async function createpaymentintent (data){
console.log(data)
let {bussiness_id,amount,reason}=data;
// first create payment intent id and then create qr code for that payment intent - global
let paymentIntentId='PI'+makeid(20);
console.log(paymentIntentId)
let qrCode=await QRCode.toDataURL(paymentIntentId,{
    width: 400,
    height: 400,
    colorDark : "#000000",
    colorLight : "#ffffff",
});
// convert base64 to buffer and then save it to db 
let res= saveImage(qrCode,paymentIntentId);
console.log(res)
let link='http://localhost:5500/qr/qr'+paymentIntentId+'.png';
let paymenturl='http://localhost:5500/pay/'+paymentIntentId;
let paymentinten= new Paymentintent({
    intent_id:paymentIntentId,
    who:bussiness_id,
    status:'unpaid',
    paidby:'', // user id 
    ammount:amount,
    reason:reason,
    qrcodeurl:link,
    payment_url:paymenturl
})
 paymentinten.save((err,doc)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(doc)
    }
} )




return data
/*
* expected return is a link to the payment intent
*/
}
module.exports=createpaymentintent;
// data=> 