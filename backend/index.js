const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
let uuid = require("uuid");
let register = require("./routes/register");
let users = require("../backend/database/schemas/regstrationSchema");
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyparser());
app.use("/register", register);
app.post("/verifytoken", (req, res) => {
  let token = req.body.data.token;
  setTimeout(() => {
    try {
      let data = jwt.verify(token, "something secret");
      res.json({
        data: data,
      });
    } catch (error) {
      res.json({
        data: "error",
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

let blockediplists = [];

app.post("/retriveuserbytoken", (req, res) => {
  let token = req.body.token;
  try {
    let user = jwt.verify(token, "something secret");
    res.json({
      data: {
        user,
      },
    });
  } catch (error) {
    console.log("erroraa jiro");
    res.json({
      data: {
        user: null,
      },
    });
  }
});
app.post('/changevercode',(req,res)=>{
  let s= req.body
  console.log(s)
})
app.post("/sendverificationcode", async (req, res) => {
  let ver_type = req.body.data.vertype;
  let input={type:"",data:""}
  if (ver_type==='email'){
    input.type='email'
    input.data=req.body.data.email
  }
  else{
    input.type='phone_number'
    input.data=req.body.data.number
  }
 
  console.log(input);
  try {
    let user=''
    input.type=='email'?user = await users.find({ email: input.data }):user= await users.find({ phone_number: input.data })
    if (user.length === 0) {
      return 0;
    } else {
      let otp = user[0].refrences.otp;
      if (otp == null) {
        let code = makeid(6);
        let updatedref=user[0].refrences
        updatedref.otp=code
        

        await users.findOneAndUpdate(
         input.type==='email'?{ email: input.data }:{ phone_number: input.data },
          { refrences:updatedref }
        );
        res.json({
          code: code,
          type:input.type==='email'?"email":"number",
        });
      }
      else{
        let otp =user[0].refrences.otp
        res.json({
          code: otp,
          type:input.type==='email'?"email":"number",
        });

      }
    }
  } catch (error) {
    console.log(error.message);
  }

});
app.post("/generate-verification-link", async (req, res) => {
  let payload = {
    data: req.body.data,
  };
  let token = jwt.sign(payload, "something secret", { expiresIn: "60m" });
  let link = "http://localhost:3000/" + token;
  res.json({
    link: token,
  });
});

app.listen(4000);
