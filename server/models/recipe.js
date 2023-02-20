// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  email: { type: String },
  title: { type: String, required: true },
  type: { type: String, required: true },
  cuisine: { type: String, required: true },
  description: { type: String },
  created_timestamp: { type: Date },
  updated_timestamp: { type: Date },
});

module.exports = mongoose.model("Recipes", recipeSchema);
