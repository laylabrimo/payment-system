const mongoose = require("mongoose");
const schema = mongoose.Schema;

const regstrationSchema = new schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  password: {
    type: String,
  },
  birthdate:{
    type:Date
  },
  refrences: {
    type: Object,
  },
  history: {
    in: {
      type: Number,
    },
    out: {
      type: Number,
    },
  },
});
module.exports = mongoose.model("Users", regstrationSchema);
