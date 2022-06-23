const AWS = require("aws-sdk");

const config = new AWS.Config({
  accessKeyId: "AKIATXZZUBDHAYWH3YE7",
  secretAccessKey: "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",
  region: "us-east-1",
});

function detectlabelska(bucket, photo) {
  let labels = [];
  console.log("hi");
  const client = new AWS.Rekognition(config);
  const params = {
    Image: {
      S3Object: {
        Bucket: bucket,
        Name: photo,
      },
    },
  };
  client.detectLabels(params, (err, res) => {

    if (err) {
      console.log(err);
    }
    res.Labels.map((x) => {
      if (x.Confidence < 90) {
        labels = labels;
      } else {
        labels.push({ name: x.Name, confidence: x.Confidence });
      }
    });


  }).promise()
  .then(()=>{
    return labels})
  
 
  
}
let r=detectlabelska("faylasheeda", "passport2.jpg")
console.log(r)


