const chai = require("chai");
const expect = chai.expect;
const validations = require("../../utils/validations");
const commonErrorCodes = require("../../responses/commonErrorCodes");

describe("Utils test cases", function () {
  describe("validate username", function () {
    it("should return success when passed username", async function () {
      const result = await validations.validateUserName("username");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });
    it("should return missing username", async function () {
      const result = await validations.validateUserName();
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.MISSING_USERNAME.status);
      expect(result.code).to.equal(commonErrorCodes.MISSING_USERNAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.MISSING_USERNAME.message
      );
    });
    it("should return invalid username when passed numeric", async function () {
      const result = await validations.validateUserName(20);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_USERNAME.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_USERNAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_USERNAME.message
      );
    });
    it("should return invalid username when passed JSON", async function () {
      const result = await validations.validateUserName({ test: "test" });
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_USERNAME.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_USERNAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_USERNAME.message
      );
    });
    it("should return invalid username when passed array", async function () {
      const result = await validations.validateUserName([1, 2]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_USERNAME.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_USERNAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_USERNAME.message
      );
    });
  });
  describe("validate email", function () {
    it("should return success when passed email", async function () {
      const result = await validations.validateEmail("chanduthedev@gmail.com");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });
    it("should return missing email", async function () {
      const result = await validations.validateEmail();
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.MISSING_EMAIL.status);
      expect(result.code).to.equal(commonErrorCodes.MISSING_EMAIL.code);
      expect(result.message).to.equal(commonErrorCodes.MISSING_EMAIL.message);
    });
    it("should return invalid email when passed numeric", async function () {
      const result = await validations.validateEmail(20);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_EMAIL.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_EMAIL.code);
      expect(result.message).to.equal(commonErrorCodes.INVALID_EMAIL.message);
    });
    it("should return invalid email when passed JSON", async function () {
      const result = await validations.validateEmail({ test: "test" });
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_EMAIL.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_EMAIL.code);
      expect(result.message).to.equal(commonErrorCodes.INVALID_EMAIL.message);
    });
    it("should return invalid email when passed array", async function () {
      const result = await validations.validateEmail([1, 2]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_EMAIL.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_EMAIL.code);
      expect(result.message).to.equal(commonErrorCodes.INVALID_EMAIL.message);
    });
  });

  describe("validate title", function () {
    it("should return success when passed title", async function () {
      const result = await validations.validateTitle("title");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });
    it("should return missing title", async function () {
      const result = await validations.validateTitle();
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.MISSING_TITLE.status);
      expect(result.code).to.equal(commonErrorCodes.MISSING_TITLE.code);
      expect(result.message).to.equal(commonErrorCodes.MISSING_TITLE.message);
    });
    it("should return invalid title when passed numeric", async function () {
      const result = await validations.validateTitle(20);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_TITLE.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_TITLE.code);
      expect(result.message).to.equal(commonErrorCodes.INVALID_TITLE.message);
    });
    it("should return invalid title when passed JSON", async function () {
      const result = await validations.validateTitle({ test: "test" });
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_TITLE.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_TITLE.code);
      expect(result.message).to.equal(commonErrorCodes.INVALID_TITLE.message);
    });
    it("should return invalid title when passed array", async function () {
      const result = await validations.validateTitle([1, 2]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_TITLE.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_TITLE.code);
      expect(result.message).to.equal(commonErrorCodes.INVALID_TITLE.message);
    });
  });

  describe("validate image", function () {
    // it("should return success when passed valid image base64 string", async function () {
    //   const result = await validations.validateImage(testImage);
    //   expect(result).to.be.an("object");
    //   expect(result).to.have.property("status");
    //   expect(result).to.have.property("code");
    //   expect(result).to.have.property("message");
    //   expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
    //   expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
    //   expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    // });
    it("should return missing image", async function () {
      const result = await validations.validateImage();
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.MISSING_IMAGE.status);
      expect(result.code).to.equal(commonErrorCodes.MISSING_IMAGE.code);
      expect(result.message).to.equal(commonErrorCodes.MISSING_IMAGE.message);
    });
    it("should return invalid image when passed numeric", async function () {
      const result = await validations.validateImage(20);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_IMAGE.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_IMAGE.code);
      expect(result.message).to.equal(commonErrorCodes.INVALID_IMAGE.message);
    });
    // it("should return invalid image when passed JSON", async function () {
    //   const result = await validations.validateImage({ test: "test" });
    //   expect(result).to.be.an("object");
    //   expect(result).to.have.property("status");
    //   expect(result).to.have.property("code");
    //   expect(result).to.have.property("message");
    //   expect(result.status).to.equal(commonErrorCodes.INVALID_IMAGE.status);
    //   expect(result.code).to.equal(commonErrorCodes.INVALID_IMAGE.code);
    //   expect(result.message).to.equal(commonErrorCodes.INVALID_IMAGE.message);
    // });
    it("should return invalid image when passed array", async function () {
      const result = await validations.validateImage([1, 2]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_IMAGE.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_IMAGE.code);
      expect(result.message).to.equal(commonErrorCodes.INVALID_IMAGE.message);
    });
  });

  describe("validate Ingredients", function () {
    it("should return success when passed valid ingredients", async function () {
      const result = await validations.validateIngredients([
        { name: "title", amount: 123 },
      ]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });
    it("should return missing ingredients", async function () {
      const result = await validations.validateIngredients();
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.MISSING_INGREDIENTS.status
      );
      expect(result.code).to.equal(commonErrorCodes.MISSING_INGREDIENTS.code);
      expect(result.message).to.equal(
        commonErrorCodes.MISSING_INGREDIENTS.message
      );
    });
    it("should return invalid ingredients when passed without name", async function () {
      const result = await validations.validateIngredients([{ amount: 123 }]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_INGREDIENTS.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_INGREDIENTS.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_INGREDIENTS.message
      );
    });

    it("should return invalid ingredients when passed string", async function () {
      const result = await validations.validateIngredients("test");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_INGREDIENTS.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_INGREDIENTS.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_INGREDIENTS.message
      );
    });
    it("should return invalid ingredients when passed numeric", async function () {
      const result = await validations.validateIngredients(20);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_INGREDIENTS.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_INGREDIENTS.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_INGREDIENTS.message
      );
    });
    it("should return invalid ingredients when passed JSON", async function () {
      const result = await validations.validateIngredients({ test: "test" });
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_INGREDIENTS.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_INGREDIENTS.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_INGREDIENTS.message
      );
    });
    it("should return missing ingredients when passed empty array", async function () {
      const result = await validations.validateIngredients([]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.MISSING_INGREDIENTS.status
      );
      expect(result.code).to.equal(commonErrorCodes.MISSING_INGREDIENTS.code);
      expect(result.message).to.equal(
        commonErrorCodes.MISSING_INGREDIENTS.message
      );
    });
  });

  describe("validate instructions", function () {
    it("should return success when passed valid instructions", async function () {
      const result = await validations.validateInstructions([
        { stepNo: 123, stepDesc: "123" },
      ]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });
    it("should return missing instructions", async function () {
      const result = await validations.validateInstructions();
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.MISSING_INSTRUCTIONS.status
      );
      expect(result.code).to.equal(commonErrorCodes.MISSING_INSTRUCTIONS.code);
      expect(result.message).to.equal(
        commonErrorCodes.MISSING_INSTRUCTIONS.message
      );
    });
    it("should return invalid instructions when passed invalid data", async function () {
      const result = await validations.validateInstructions([
        { step: 123, stepDesc: "123" },
      ]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_INSTRUCTIONS.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_INSTRUCTIONS.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_INSTRUCTIONS.message
      );
    });
    it("should return invalid instructions when passed string", async function () {
      const result = await validations.validateInstructions("test");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_INSTRUCTIONS.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_INSTRUCTIONS.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_INSTRUCTIONS.message
      );
    });
    it("should return invalid instructions when passed numeric", async function () {
      const result = await validations.validateInstructions(20);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_INSTRUCTIONS.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_INSTRUCTIONS.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_INSTRUCTIONS.message
      );
    });
    it("should return invalid instructions when passed JSON", async function () {
      const result = await validations.validateInstructions({ test: "test" });
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_INSTRUCTIONS.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_INSTRUCTIONS.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_INSTRUCTIONS.message
      );
    });
    it("should return missing instructions when passed empty array", async function () {
      const result = await validations.validateInstructions([]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.MISSING_INSTRUCTIONS.status
      );
      expect(result.code).to.equal(commonErrorCodes.MISSING_INSTRUCTIONS.code);
      expect(result.message).to.equal(
        commonErrorCodes.MISSING_INSTRUCTIONS.message
      );
    });
  });
});
