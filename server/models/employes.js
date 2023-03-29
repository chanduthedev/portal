// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const mongoose = require("mongoose");
const employesSchema = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String, required: true },
  title: { type: String, required: true },
  company_name: { type: String, required: true },
  phone_no: { type: String, required: true },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  postal_code: { type: String },
  country: { type: String },
  url: { type: String },
  sic_code: { type: String },
  biz_description: { type: String },
  industry: { type: String },
  created_timestamp: { type: Date },
  updated_timestamp: { type: Date },
});

module.exports = mongoose.model("employees", employesSchema);
