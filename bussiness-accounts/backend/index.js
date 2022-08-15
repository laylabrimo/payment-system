let express = require('express');
let app=express();
app.use(express.json());
let connectdb = require('./db/connects')
connectdb
app.use(express.static(__dirname+'/public'));
let cors = require('cors');
app.use(cors({
    origin: '*',
    
}));
app.use('/register',require('./routes/auth/register'));
app.use('/login',require('./routes/auth/login'));

app.use('/vercode',require('./routes/auth/vercode'));
app.use('/intents',require('./routes/payments/intents'));



app.listen(5500,()=>{
    console.log('server started at port 5500');
})
