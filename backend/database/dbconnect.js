const mongoose= require('mongoose')
let url ='mongodb+srv://xiireey:xiireey321@final-project.9apco.mongodb.net/?retryWrites=true&w=majority'
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