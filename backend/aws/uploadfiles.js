const AWS = require('aws-sdk')
const s3Config = {
 accessKeyId: "AKIATXZZUBDHAYWH3YE7",
 secretAccessKey: "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",
 region: "us-east-1",
}
const s3 = new AWS.S3(s3Config)
var bucketParams = {
    Bucket : 'mugdiga'
  };

let uploadfile=async(bucketname,file)=>{
    var uploadParams = {Bucket:bucketname, Key: '', Body: ''};
var file =file
var fs = require('fs');
var fileStream = fs.createReadStream(file);
fileStream.on('error', function(err) {
  console.log('File Error', err);
});


uploadParams.Body = fileStream;
var path = require('path');
uploadParams.Key = path.basename(file);

// call S3 to retrieve upload file to specified bucket
s3
.putObject(uploadParams,
    (err, data) => {
        return data
    }
)



}

module.exports=uploadfile
