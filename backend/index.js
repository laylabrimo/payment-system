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

app.use(
  cors({
    origin: "*",
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
  try {
    let user = jwt.verify(token, "verystrongsecretkey");
    let userka = await users.findOne({ email: user.email });
    res.json({
      data: {
        userka,
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
app.post("/changevercode", (req, res) => {
  let s = req.body;
  console.log(s);
});
app.post("/sendverificationcode", async (req, res) => {
  let ver_type = req.body.data.vertype;
  let input = { type: "", data: "" };
  if (ver_type === "email") {
    input.type = "email";
    input.data = req.body.data.email;
  } else {
    input.type = "phone_number";
    input.data = req.body.data.number;
  }

  console.log(input);
  try {
    let user = "";
    input.type == "email"
      ? (user = await users.find({ email: input.data }))
      : (user = await users.find({ phone_number: input.data }));
    if (user.length === 0) {
      return 0;
    } else {
      let otp = user[0].refrences.otp;
      if (otp == null) {
        let code = makeid(6);
        if (input.type == "email") {
          sendemailthroughemail(user[0].name, user[0].email, code);
        } else {
          sendcode(user[0].phone_number, user[0].name, code);
        }

        console.log(user[0].phone_number, user[0].name, code);
        let updatedref = user[0].refrences;
        updatedref.otp = code;

        await users.findOneAndUpdate(
          input.type === "email"
            ? { email: input.data }
            : { phone_number: input.data },
          { refrences: updatedref }
        );
        res.json({
          code: code,
          type: input.type === "email" ? "email" : "number",
        });
      } else {
        let otp = user[0].refrences.otp;
        res.json({
          code: otp,
          type: input.type === "email" ? "email" : "number",
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

app.listen(4000);
