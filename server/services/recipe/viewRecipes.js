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
    const inputEmail = req.params.userName;
    console.log("inputEmail:", inputEmail);
    const result = validations.validateUserName(inputEmail);
    if (result["status"] !== commonErrCodes.SUCCESS.status) {
      return res.status(result["status"]).json({
        code: result["code"],
        message: result["message"],
      });
    }

    let recipeDetails = await Recipe.find({ user_name: inputEmail });

    console.log("count:", recipeDetails);

    if (recipeDetails) {
      // let respData = {};
      let respData = recipeDetails;
      // respData["title"] = recipeDetails.title;
      // respData["type"] = recipeDetails.type;
      // respData["cuisine"] = recipeDetails.cuisine;
      // respData["description"] = recipeDetails.description;
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
