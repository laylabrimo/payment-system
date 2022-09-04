let express=require('express');
let app=express();
let bodyParser=require('body-parser');
let {paysom,Intents}=require('paysom')
let cors= require('cors');
app.use(cors({
    origin:'*'
}))
app.use(bodyParser.json());
paysom.config({
    publish_key:'P13981844-b24a-4c29-b703-1a60cf0e7800',
    secret_key:'S9b865fbd-7fe4-41a6-869d-8d1317890566'
})
app.post('/pay',(req,res)=>{
    console.log(req.body)
    let intent = new Intents()
    intent.createintent({
        amount:req.body.amount,
        reason:req.body.reason,
        surl:'http://localhost:3001/success',
        furl:'http://localhost:3000/failure'
    })
    .then((resp)=>{
        console.log(resp)
        res.json(resp)

    })
    .catch(err=>{
        res.send(err)
    }

    )

})
app.listen(3005,()=>{
    console.log('server started at port 3005');
}
)
