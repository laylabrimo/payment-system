const AWS = require("aws-sdk");
require('dotenv').config()
var fs = require("fs");
let getkeys=require('../config')
const s3Config =  new AWS.Config({
  credentials:{
    accessKeyId:'',
    secretAccessKey:'',
    
  },

  region: "us-east-1",
});

let uploadfile=async(bucketname, file)=>{
  var uploadParams = { Bucket: bucketname, Key: "", Body: "" };
  var file = file;

  var fileStream = fs.createReadStream(file);
  fileStream.on("error", function (err) {
    console.log("File Error", err);
  });
let datada=null
  uploadParams.Body = fileStream;
  var path = require("path");
  uploadParams.Key = path.basename(file);

  // call S3 to retrieve upload file to specified bucket
await s3.putObject(uploadParams,(err,data)=>{
  datada=data

}).promise()
return datada

};

  



module.exports = uploadfile;
