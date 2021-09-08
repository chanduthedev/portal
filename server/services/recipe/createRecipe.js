// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const Recipe = require("../../models/recipe");
const commResp = require("../../responses/commonRespCodes");

("use strict");

async function process(req, res) {
  console.log("recipe title:", req.body.title);
  const recipe = new Recipe({
    title: req.body.title,
    image: req.body.image,
    ingradients: req.body.ingradients,
    instructions: req.body.instructions,
    created_timestamp: new Date().toISOString().replace(/T/, " "),
  });
  try {
    const existingRecipe = await Recipe.find({ title: req.body.title });
    if (existingRecipe.length) {
      return res.status(400).json({
        code: commResp.RECIPE_ALREADY_EXISTS.code,
        message: commResp.RECIPE_ALREADY_EXISTS.message,
      });
    }
    const newRecipe = await recipe.save();
    if (newRecipe) {
      return res.status(201).json({
        data: newRecipe,
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
    console.log("exception:%s", err);
    return res.status(400).json({
      code: commResp.RECIPE_CREATION_EXCEPTION.code,
      message: commResp.RECIPE_CREATION_EXCEPTION.message,
    });
  }
}
exports.process = process;
