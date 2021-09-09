// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const respCodes = require("../../../responses/commonRespCodes");
const expect = chai.expect;

chai.use(chaiHttp);

const appHost = "http://localhost:7788";

describe("Delete Recipes", () => {
  describe("Delete a recipe", () => {
    it("Should delete a recipe", (done) => {
      chai
        .request(appHost)
        .delete(`/recipe/chicken_test`)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(respCodes.RECIPE_DELETED.code);
          expect(res.body["message"]).to.equal(
            respCodes.RECIPE_DELETED.message
          );
          done();
        });
    });
  });
  describe("Delete a recipe which doesn't exists", () => {
    it("Should show recipe not exists error message", (done) => {
      chai
        .request(appHost)
        .delete(`/recipe/chicken_test1`)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(respCodes.RECIPE_NOT_FOUND.code);
          expect(res.body["message"]).to.equal(
            respCodes.RECIPE_NOT_FOUND.message
          );
          done();
        });
    });
  });
});
