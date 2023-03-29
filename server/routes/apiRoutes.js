// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const validations = require("./../utils/validations");
("use strict");

function apiRoutes(app) {
  app.get("/ping", function (req, res) {
    return res.send("pong");
  });

  app.get("/", function (req, res) {
    return res.send("Server is up and running.");
  });
  // user API's
  app
    .route("/user/register")
    .post(require("../services/user/userRegister").process);

  // Employee API's
  app
    .route("/employee/register")
    .post(require("../services/employee/register").process);

  app
    .route("/employees")
    .get(require("../services/employee/viewEmployees").process);

  app
    .route("/user/login")
    .post(require("../services/user/userLogin").processRequest);

  app.route("/user/:id").delete(require("../services/user/userDelete").process);

  // Recipe API's
  app
    .route("/recipe/create")
    .post(
      validations.validateToken,
      validations.allowIfLoggedin,
      require("../services/recipe/createRecipe").process
    );

  app
    .route("/:userName/recipes")
    .get(
      validations.validateToken,
      validations.allowIfLoggedin,
      require("../services/recipe/viewRecipes").process
    );
  app
    .route("/recipe/:title")
    .get(
      validations.validateToken,
      validations.allowIfLoggedin,
      require("../services/recipe/viewRecipe").process
    )
    .delete(
      validations.validateToken,
      validations.allowIfLoggedin,
      require("../services/recipe/deleteRecipe").process
    );
  app
    .route("/recipe/update")
    .patch(
      validations.validateToken,
      validations.allowIfLoggedin,
      require("../services/recipe/updateRecipe").process
    );
}
module.exports = apiRoutes;
