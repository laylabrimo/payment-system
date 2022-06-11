const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
let uuid = require("uuid");
let register = require('./routes/register')
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyparser());
app.use('/register',register)
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
  var result           = '';
  var characters       = '0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

let blockediplists=[]
let users=[]



app.post("/sendverificationcode", (req, res) => {
  let ver_type = req.body.data.vertype;
  let code = makeid(6);
  if (ver_type === "email") {
    console.log('sent ',code)
    res.json({
      code: code,
      type: "email",
    });
  }
  if (ver_type === "number") {
    res.json({
      code: "61524",
      type: "number",
    });
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
