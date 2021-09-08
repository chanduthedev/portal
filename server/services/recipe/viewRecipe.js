// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";

const Recipe = require("../../models/recipe");
const commonResponseCodes = require("../../responses/commonRespCodes");

async function process(req, res) {
  console.log("title:%s", req.params.title);
  try {
    let recipeDetails = await Recipe.findOne({ title: req.params.title });

    if (recipeDetails) {
      let respData = {};
      respData["title"] = recipeDetails.title;
      respData["image"] = recipeDetails.image;
      respData["ingradients"] = recipeDetails.ingradients;
      respData["instructions"] = recipeDetails.instructions;
      return res.status(200).json({
        data: respData,
        code: commonResponseCodes.RECIPE_DETAILS_FOUND.code,
        message: commonResponseCodes.RECIPE_DETAILS_FOUND.message,
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
