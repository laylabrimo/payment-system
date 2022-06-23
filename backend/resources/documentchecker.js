const detectlabels =require('../aws/detectlablels')
 const isdocument=(bucket,photo)=>{
    let isdocument=''
    let res=detectlabels('faylasha','passport2.jpg')
    console.log(res)

}
isdocument()