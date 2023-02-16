// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";

const Recipe = require("../../models/recipe");
const commonResponseCodes = require("../../responses/commonRespCodes");
const commonErrCodes = require("../../responses/commonErrorCodes");
const validations = require("../../utils/validations");

async function process(req, res) {
  try {
    const inputTitle = req.body.title;
    const result = validations.validateTitle(inputTitle);
    if (result["status"] !== commonErrCodes.SUCCESS.status) {
      return res.status(result["status"]).json({
        code: result["code"],
        message: result["message"],
      });
    }
    let recipeDetails = await Recipe.findOne({ title: inputTitle });
    if (recipeDetails) {
      let recipeDetailsToUpdate = {};
      const inputType = req.body.type;
      if (inputType) {
        recipeDetailsToUpdate.type = inputType;
        // const result = validations.validateImage(inputImage);
        // if (result["status"] !== commonErrCodes.SUCCESS.status) {
        //   return res.status(result["status"]).json({
        //     code: result["code"],
        //     message: result["message"],
        //   });
        // }
      }

      const inputCuisine = req.body.cuisine;
      if (inputCuisine) {
        // Appending new ingradients to existing ingradients
        recipeDetailsToUpdate.cuisine = inputCuisine;
      }

      const inputDescription = req.body.description;
      if (inputDescription) {
        recipeDetailsToUpdate.description = inputDescription;
      }
      recipeDetailsToUpdate.updated_timestamp = new Date().toISOString();

      const updatedRecipeDetails = await Recipe.findOneAndUpdate(
        { title: inputTitle },
        recipeDetailsToUpdate,
        { new: true }
      );

      let respData = {};
      respData["title"] = updatedRecipeDetails.title;
      respData["type"] = updatedRecipeDetails.type;
      respData["cuisine"] = updatedRecipeDetails.cuisine;
      respData["description"] = updatedRecipeDetails.description;
      return res.status(200).json({
        data: respData,
        code: commonResponseCodes.RECIPE_DETAILS_UPDATED.code,
        message: commonResponseCodes.RECIPE_DETAILS_UPDATED.message,
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
