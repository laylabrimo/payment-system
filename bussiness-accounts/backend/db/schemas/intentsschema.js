const mongoose = require("mongoose");
const schema = mongoose.Schema;

const intentsschema = new schema({
    intent_id:{
        type:String
    },
    who:{
        type:String
    },
    status:{
        type:String
    },
    paidby:{
        type:String
    },
    ammount:{
        type:Number
    },
    reason:{
        type:String
    },
    qrcodeurl:{
        type:String
    },
    payment_url:{
        type:String
    }


  
});
module.exports = mongoose.model("intents", intentsschema);
