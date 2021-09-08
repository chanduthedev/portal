// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created_timestamp: { type: Date },
  updated_timestamp: { type: Date },
});

module.exports = mongoose.model("Users", usersSchema);
