let Subscriptions= require('../../db/schemas/Subscriptionschema');
let Users = require('../../db/schemas/Userschema');
let Accounts= require('../../db/schemas/Userschema');
let router = require('express').Router();
let barcode = require('jsbarcode')



router.post('/create', (req, res) => {
    /*
     * expected body => subscription type, subscription amount, subscription start date, subscription end date, subscription created by
     */
    let {bussinessid,type,amount,strat_date,end_date}=req.body
    // generate barcode with jsbarcode in nodejs
   
    console.log(req.body)
    let subscription = new Subscriptions({
        sub_id:'SUB'+bussinessid+'_'+type+'_'+Math.floor(Math.random()*100000000000),
        type:type,
        sub_amount:amount,
        sub_status:'inactive',
        sub_start_date:strat_date,
        sub_end_date:end_date,
        sub_created_date:new Date(),
        sub_created_by:{
            userid:'IMRAN'
        }
    })
    subscription.save((err,subscription)=>{
        if(err){
            res.send({
                status:'error',
                message:'error in saving subscription'
            })
        }
        else{
            res.send({
                status:'success',
                message:'subscription created successfully'
            })
        }
    }
    )
    

})

// get subscribtion details by subscription id

router.post('/get', async(req, res) => {
let {sub_id}=req.body
console.log(sub_id,Array.isArray(sub_id))
// sub_id can be array of sub_id or single sub_id so we need to check if it
// is array or not and then we need to find the subscription details for each sub_id
if(Array.isArray(sub_id)){
    let subscriptions = await Subscriptions.find({sub_id:{$in:sub_id}})
    res.send({
        status:'success',
        message:'subscription details found',
        subscriptions:subscriptions
    })
}
else{
    let subscription = await Subscriptions.findOne({sub_id:sub_id})
    res.send({
        status:'success',
        message:'subscription details found',
        subscription:subscription
    })
}

})
router.post('/subscribe', async(req, res) => {
   let {subid,userid}=req.query
    // find user
    let user=await Users.findOne({cus_id:userid})
    if(user){
        // find subscribtion
        let subscription=await Subscriptions.findOne({sub_id:subid})
        if(subscription){
            // check if user has already subscribed
            let isSubscribed=false
            user.subscribtions.forEach(sub=>{
                if(sub==subid){
                    isSubscribed=true
                }
            })
            if(isSubscribed){
                res.send({
                    status:'error',
                    message:'user has already subscribed'
                })
            }
            else{
                // subscribe user
                user.subscribtions.push(subscription.sub_id)
                user.save((err,user)=>{
                    if(err){
                        res.send({
                            status:'error',
                            message:'error in subscribing user'
                        })
                    }
                    else{
                        res.send({
                            status:'success',
                            message:'user subscribed successfully'
                        })
                    }
                })
            }
        }
        else{
            res.send({
                status:'error',
                message:'subscription not found',
                subscription:subscription
            })
        }
        
       
    }
    else{
        res.send({
            status:'error',
            message:'user not found'
        })

    }
})
module.exports = router;