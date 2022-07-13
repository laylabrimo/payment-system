const express = require("express");
const bodyparser = require("body-parser");
let refreshtoken = require("./resources/refreshtoken");
let fileupload = require("express-fileupload");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
app.use(fileupload());
app.use(express.static("files"));
let login = require("./routes/login");
let uuid = require("uuid");
let uploaddoc = require("../backend/routes/uploadfile");
let register = require("./routes/register");
let users = require("../backend/database/schemas/regstrationSchema");
const sendcode = require("./resources/sendcode");
const sendemailthroughemail = require("../backend/sendcode_email");
const saveImage = require("./resources/uploadfilefrombase64");
const detectlabels = require("./aws/detectlablels");
const {Server} =require('socket.io')
let http=require('http');
const addpaymenmethod = require("./payments/addpaymentmethod");
const assignpaymentmethodtouser = require("./payments/Asignuserpaymentmethod");
const removepaymentmethod = require("./payments/removepaymentmethod");
const deposit = require("./payments/deposit");
let server=http.createServer(app)
const io= new Server(server,{
  cors:{
    origin:'*'
  }
})

io.on('connection',(socket)=>{
  console.log('someone connected ',socket.id)
 
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyparser({}));
app.use("/login", login);
app.use("/register", register);
app.use("/upload", uploaddoc);
app.post("/verifytoken", (req, res) => {
  let token = req.body.data.token;

  setTimeout(async () => {
    try {
      let data = jwt.verify(token, "verystrongsecretkey");
      let user = await users.findOne({ email: data.email });
      if (user) {
        res.json({
          data: data,
        });
      } else {
        res.status(401).json({
          data: "no user",
        });
      }
    } catch (error) {
      res.json({
        data: error.message,
      });
    }
  }, 1000);
});

function makeid(length) {
  var result = "";
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
app.post("/retriveuserbytoken", async (req, res) => {
  let token = req.body.token;
  console.log('halkaanw axaa lagu soo dabacay',token)
  try {
    let user = jwt.verify(token, "verystrongsecretkey");
    console.log('in jwt',user)
    let userka = await users.findOne({ email: user.email });
    console.log('in mongodb',userka)
    console.log(userka)
    res.json({
      data: {
        userka,
      },
    });
  } catch (error) {
    console.log("erroraa jiro",error.message);
    res.json({
      data: {
        user: null,
      },
    });
  }
});
app.post("/changevercode", (req, res) => {
  let s = req.body;
  let otp=makeid(6)
  console.log(otp)
  var myquery = { email: s.email };
        var newvalues = { $set: {refrences: {otp:otp}} };
        users.findOneAndUpdate(myquery,newvalues,(err,res)=>{
          if (err){
            console.log(err)
          }
          socket.emit('labadalay',{codeka:otp})
          console.log(res)

        })

});
app.post("/sendverificationcode", async (req, res) => {
  let data= req.body.data
  console.log(data)
  // email
   if(data.email){
     let user= await users.findOne({email:data.email})
     let haveotp=user.refrences.otp
     if(haveotp==null){
       console.log('generate otp')
       let otp=makeid(6)
       //update the otp
       var myquery = { email: data.email };
        var newvalues = { $set: {refrences: {otp:otp}} };
        users.findOneAndUpdate(myquery,newvalues,(err,res)=>{
          if (err){
            console.log(err)
          }
          console.log(res)
        })
       // send the user by email
       res.json({
         otp
       })
     }
     else{
      let otp=user.refrences.otp
      res.json({
        otp
      })
     }
     
   }
   if(data.number){
    let user= await users.findOne({phone_number:data.number})
    let haveotp=user.refrences.otp
    if(haveotp==null){
      console.log('generate otp with number')
      let otp=makeid(6)
      // send the user by number
      res.json({
        otp
      })
    }
    else{
      let otp=user.refrences.otp
      res.json({
        otp
      })
    }
    
  }


});
app.post("/generate-verification-link", async (req, res) => {
  console.log('waa lii imaaday')
  let data = {
    email: req.body.data.email
  };
  
  console.log('datada la xirayo marka la verify gareenayo  waa ',data)

  let token = jwt.sign(data, "verystrongsecretkey", { expiresIn: "60m" });
  let link = "http://localhost:3000/" + token;
  res.json({
    link: token,
  });
});
app.post("/uploadfaces", (req, res) => {
  let filename = saveImage(req.body.link);

  detectlabels("/faces/" + filename).then((x) => {
    let facescore = 0;
    x.map((n) => {
      if (n.name == "Face" && n.confidence > 99) {
        facescore = facescore + 1;
      } else {
        facescore = facescore;
      }
    });
    console.log(facescore);
    if (facescore == 1) {
      res.json({
        data: "ok",
      });
    } else {
      res.json({
        data: "notok",
      });
    }
  });
});
app.post("/refreshtoken", async (req, res) => {
  let token = req.body.token;
  if (token) {
    let resp = await refreshtoken(token);
    res.send(resp);
  } else {
    res.status(403).json("token must be profided");
  }
});
app.post('/addpm',async(req,res)=>{
  let user=req.body.user.data.data.userka
  if (user!=='undefined'){
   await addpaymenmethod(req.body.data)
   .then(async(paymentmethodid)=>{
     console.log('waa halkaan',paymentmethodid,user.cus_id)
     await assignpaymentmethodtouser(paymentmethodid,user.cus_id)
     .then((x)=>{
       res.json({
         msg:'success'
       })

     })
     .catch((e)=>{
       console.log('erroraa jiro',e.message)
       res.json({
        error:e.message
      })
     })

   })
   .catch((e)=>{
     console.log('in kudar method ',e.message)
    res.json({
      error:e.message
    })
     
   })

  }
  else{
    console.log('user can not be retrived',user)
  }
  
  
})
app.post('/deposit',(req,res)=>{
  deposit(req.body)

})
app.post('/rmpm',async(req,res)=>{
  let id=req.body.data
  let user=req.body.user.data.data.userka
  if (user && id){
    let resp= await removepaymentmethod(id,user)
    console.log(resp)

  }
  else{
    res.send({
      error:'error'
    })
  }
 
})
})

server.listen(4000);
