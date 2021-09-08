// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";

const Recipe = require("../../models/recipe");
const commonResponseCodes = require("../../responses/commonRespCodes");

async function process(req, res) {
  try {
    const recipe = await Recipe.findOneAndDelete({ title: req.params.title });
    if (recipe) {
      return res.status(200).json({
        code: commonResponseCodes.RECIPE_DELETED.code,
        message: commonResponseCodes.RECIPE_DELETED.message,
      });
    } else {
      return res.status(404).json({
        code: commonResponseCodes.RECIPE_NOT_FOUND.code,
        message: commonResponseCodes.RECIPE_NOT_FOUND.message,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
exports.process = process;
