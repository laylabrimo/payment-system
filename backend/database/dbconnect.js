const mongoose= require('mongoose')
let url =''
mongoose.connect(url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.catch(er=>{
    console.log(er)
})

.then(()=>{
    console.log('connnected')
})

console.log(url)
module.exports= mongoose