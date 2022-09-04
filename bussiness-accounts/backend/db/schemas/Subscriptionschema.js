const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Subscriptionschema = new schema({
 
  sub_id:{
      type:String
  },
  type:{
    type:String

  },
  sub_amount:{
      type:Number
  },
    sub_status:{
        type:String
    },
    sub_start_date:{
        type:Date
    },
    sub_end_date:{
        type:Date
    },
    sub_created_date:{
        type:Date
    },
    sub_created_by:{
        type:Object
    },
    
});
module.exports = mongoose.model("Subscriptions", Subscriptionschema);
