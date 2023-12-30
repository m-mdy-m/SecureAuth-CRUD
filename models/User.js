const { Schema, default: mongoose } = require("mongoose");

const User = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  rstT: String,
  rstT_Ex: String,
});

module.exports = mongoose.model("User", User);
