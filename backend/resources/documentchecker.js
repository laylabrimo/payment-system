const detectlabels = require("../aws/detectlablels");
let isdocument = async () => {
  let documentwithoutfacescore = 0;
  let isdocumentwithoutface = false;
  let documentwithfacescore = 0;
  let isdocumentwithface = false;

  let labels = [];
  detectlabels()
    .then((x) => {
      console.log(x);
      x.map((x) => {
        labels.push(x.name);
      });
    })
    .then(() => {
      labels.map((x) => {
        if (x == "Text" || x == "Document" || x == "Id Cards") {
          documentwithoutfacescore = documentwithoutfacescore + 1;
          console.log(documentwithoutfacescore)
        } else {
          documentwithoutfacescore = documentwithoutfacescore;
        }
      });
    })
    .then(() => {
      if (documentwithoutfacescore < 2) {
        isdocumentwithoutface = isdocumentwithoutface;
      } else {
        isdocumentwithoutface = true;
      }
    })
    .then(() => {
      labels.map((x) => {
        console.log(x)
        if (x == "Human" || x == "Person") {
          documentwithfacescore = documentwithfacescore + 1;
        } else {
          documentwithfacescore = documentwithfacescore;
        }
      });
    })
    .then(() => {
      if (documentwithfacescore > 1) {
        console.log('faceka',documentwithfacescore)
        isdocumentwithface = true;
      } else {
        console.log('faceka2',documentwithfacescore)
        isdocumentwithface = isdocumentwithface;
      }
    });
  if (isdocumentwithoutface && isdocumentwithface) {
    return 2;
  } else if (isdocumentwithoutface && !isdocumentwithface) {
    return 1;
  } else {
    console.log(
      documentwithoutfacescore,
      isdocumentwithoutface,
      documentwithfacescore,
      isdocumentwithface
    );
    return 0;
  }
};

isdocument().then((x) => {
  console.log(x);
});

module.exports = isdocument;
