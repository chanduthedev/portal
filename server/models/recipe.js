// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  email: { type: String },
  title: { type: String, required: true },
  type: { type: String },
  cuisine: { type: String },
  description: { type: String },
  created_timestamp: { type: Date },
  updated_timestamp: { type: Date },
});

module.exports = mongoose.model("Recipes", recipeSchema);
