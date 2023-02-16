// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const Recipe = require("../../models/recipe");
const commResp = require("../../responses/commonRespCodes");
const commErrorCodes = require("../../responses/commonErrorCodes");
const validations = require("../../utils/validations");
("use strict");

async function process(req, res) {
  const result = validations.validateCreateRecipeRequestBody(req.body);
  if (result["status"] !== commErrorCodes.SUCCESS.status) {
    return res.status(result["status"]).json({
      code: result["code"],
      message: result["message"],
    });
  }

  // Making model object to insert
  const recipe = new Recipe({
    user_name: req.body.userName,
    email: req.body.email,
    title: req.body.title,
    type: req.body.type,
    cuisine: req.body.cuisine,
    description: req.body.description,
    created_timestamp: new Date().toISOString().replace(/T/, " "),
  });
  try {
    // Checking for already existing title
    const existingRecipe = await Recipe.find({ title: req.body.title });
    if (existingRecipe.length) {
      return res.status(400).json({
        code: commResp.RECIPE_ALREADY_EXISTS.code,
        message: commResp.RECIPE_ALREADY_EXISTS.message,
      });
    }
    // No recipe with given title, can create now
    const newRecipe = await recipe.save();
    let respData = {};
    respData["title"] = newRecipe.title;
    respData["type"] = newRecipe.type;
    respData["cuisine"] = newRecipe.cuisine;
    respData["description"] = newRecipe.description;
    if (newRecipe) {
      return res.status(201).json({
        data: respData,
        code: commResp.RECIPE_ADDED.code,
        message: commResp.RECIPE_ADDED.message,
      });
    } else {
      return res.status(400).json({
        code: commResp.RECIPE_CREATION_ERROR.code,
        message: commResp.RECIPE_CREATION_ERROR.message,
      });
    }
  } catch (err) {
    console.log("err:%s", err);
    return res.status(400).json({
      code: commResp.RECIPE_CREATION_EXCEPTION.code,
      message: commResp.RECIPE_CREATION_EXCEPTION.message,
    });
  }
}
exports.process = process;
