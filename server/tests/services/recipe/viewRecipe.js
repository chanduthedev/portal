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
const signUpEndPoint = "/recipe/view";

describe("View Recipes", () => {
  describe("View a recipe", () => {
    it("Should get recipe details", (done) => {
      chai
        .request(appHost)
        .get("/recipe/chicken_test")
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(
            respCodes.RECIPE_DETAILS_FOUND.code
          );
          expect(res.body["message"]).to.equal(
            respCodes.RECIPE_DETAILS_FOUND.message
          );
          expect(res.body).to.have.property("data");

          const resBodyData = res.body.data;
          expect(resBodyData).to.have.property("title");
          expect(resBodyData).to.have.property("image");
          expect(resBodyData).to.have.property("ingradients");
          expect(resBodyData).to.have.property("instructions");

          done();
        });
    });
  });

  describe("Recipe not exists ", () => {
    it("Should show recipe doesn't exists", (done) => {
      chai
        .request(appHost)
        .get("/recipe/chicken_test1")
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
