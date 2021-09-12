// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";

describe("Complete Unit Test", () => {
  describe("Utils unit tests", () => {
    require("./utils/validations");
  });

  describe("User API's", () => {
    require("./services/user/userRegister");
    require("./services/user/userLogin");
  });

  describe("Recipe API's", () => {
    require("./services/recipe/createRecipe");
    require("./services/recipe/viewRecipe");
    require("./services/recipe/updateRecipe");
    require("./services/recipe/deleteRecipe");
  });

  describe("User API's", () => {
    require("./services/user/userDelete");
  });
});
