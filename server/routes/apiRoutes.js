// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";

function apiRoutes(app) {
  // user API's
  app
    .route("/user/register")
    .post(require("../services/user/registerUser").process);

  app.route("/user/login").post(require("../services/user/userLogin").process);

  // Recipe API's
  app
    .route("/recipe/create")
    .post(require("../services/recipe/createRecipe").process);

  app
    .route("/recipe/:title")
    .get(require("../services/recipe/viewRecipe").process)
    .delete(require("../services/recipe/deleteRecipe").process);
  app
    .route("/recipe/update")
    .patch(require("../services/recipe/updateRecipe").process);
}
module.exports = apiRoutes;
