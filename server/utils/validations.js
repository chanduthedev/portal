// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const validator = require("email-validator");
const commonErrorCodes = require("../responses/commonErrorCodes");

async function validateUserName(userName) {
  if (typeof userName === "undefined") {
    return {
      status: commonErrorCodes.MISSING_USERNAME.status,
      code: commonErrorCodes.MISSING_USERNAME.code,
      message: commonErrorCodes.MISSING_USERNAME.message,
    };
  }
  if (!userName) {
    return {
      status: commonErrorCodes.INVALID_USERNAME.status,
      code: commonErrorCodes.INVALID_USERNAME.code,
      message: commonErrorCodes.INVALID_USERNAME.message,
    };
  }
  if (userName && (userName.length === 0 || typeof userName !== "string")) {
    return {
      status: commonErrorCodes.INVALID_USERNAME.status,
      code: commonErrorCodes.INVALID_USERNAME.code,
      message: commonErrorCodes.INVALID_USERNAME.message,
    };
  }

  return commonErrorCodes.SUCCESS;
}
exports.validateUserName = validateUserName;

async function validateEmail(email) {
  if (typeof email === "undefined") {
    return {
      status: commonErrorCodes.MISSING_EMAIL.status,
      code: commonErrorCodes.MISSING_EMAIL.code,
      message: commonErrorCodes.MISSING_EMAIL.message,
    };
  }
  if (!email) {
    return {
      status: commonErrorCodes.INVALID_EMAIL.status,
      code: commonErrorCodes.INVALID_EMAIL.code,
      message: commonErrorCodes.INVALID_EMAIL.message,
    };
  }
  if (email && (email.length === 0 || typeof email !== "string")) {
    return {
      status: commonErrorCodes.INVALID_EMAIL.status,
      code: commonErrorCodes.INVALID_EMAIL.code,
      message: commonErrorCodes.INVALID_EMAIL.message,
    };
  }
  if (!validator.validate(email)) {
    return {
      status: commonErrorCodes.INVALID_EMAIL.status,
      code: commonErrorCodes.INVALID_EMAIL.code,
      message: commonErrorCodes.INVALID_EMAIL.message,
    };
  }

  return commonErrorCodes.SUCCESS;
}
exports.validateEmail = validateEmail;

async function validateTitle(title) {
  if (typeof title === "undefined") {
    return {
      status: commonErrorCodes.MISSING_TITLE.status,
      code: commonErrorCodes.MISSING_TITLE.code,
      message: commonErrorCodes.MISSING_TITLE.message,
    };
  }
  if (!title) {
    return {
      status: commonErrorCodes.INVALID_TITLE.status,
      code: commonErrorCodes.INVALID_TITLE.code,
      message: commonErrorCodes.INVALID_TITLE.message,
    };
  }
  if (title && (title.length === 0 || typeof title !== "string")) {
    return {
      status: commonErrorCodes.INVALID_TITLE.status,
      code: commonErrorCodes.INVALID_TITLE.code,
      message: commonErrorCodes.INVALID_TITLE.message,
    };
  }

  return commonErrorCodes.SUCCESS;
}
exports.validateTitle = validateTitle;

async function validateImage(imageData) {
  if (typeof imageData === "undefined") {
    return {
      status: commonErrorCodes.MISSING_IMAGE.status,
      code: commonErrorCodes.MISSING_IMAGE.code,
      message: commonErrorCodes.MISSING_IMAGE.message,
    };
  }
  if (!imageData) {
    return {
      status: commonErrorCodes.INVALID_IMAGE.status,
      code: commonErrorCodes.INVALID_IMAGE.code,
      message: commonErrorCodes.INVALID_IMAGE.message,
    };
  }

  let validObject =
    imageData &&
    Object.keys(imageData).length > 0 &&
    !Array.isArray(imageData) &&
    typeof imageData !== "string" &&
    typeof imageData !== "number";

  if (!validObject) {
    return {
      status: commonErrorCodes.INVALID_IMAGE.status,
      code: commonErrorCodes.INVALID_IMAGE.code,
      message: commonErrorCodes.INVALID_IMAGE.message,
    };
  }

  return commonErrorCodes.SUCCESS;
}
exports.validateImage = validateImage;

async function validateIngredients(ingradients) {
  if (typeof ingradients === "undefined") {
    return {
      status: commonErrorCodes.MISSING_INGREDIENTS.status,
      code: commonErrorCodes.MISSING_INGREDIENTS.code,
      message: commonErrorCodes.MISSING_INGREDIENTS.message,
    };
  }
  if (!ingradients) {
    return {
      status: commonErrorCodes.INVALID_INGREDIENTS.status,
      code: commonErrorCodes.INVALID_INGREDIENTS.code,
      message: commonErrorCodes.INVALID_INGREDIENTS.message,
    };
  }
  if (ingradients && !Array.isArray(ingradients)) {
    return {
      status: commonErrorCodes.INVALID_INGREDIENTS.status,
      code: commonErrorCodes.INVALID_INGREDIENTS.code,
      message: commonErrorCodes.INVALID_INGREDIENTS.message,
    };
  }
  if (!ingradients.length) {
    return {
      status: commonErrorCodes.MISSING_INGREDIENTS.status,
      code: commonErrorCodes.MISSING_INGREDIENTS.code,
      message: commonErrorCodes.MISSING_INGREDIENTS.message,
    };
  }

  let hasKey = true;
  for (const ingradient of ingradients) {
    hasKey = true;
    if (
      !ingradient.hasOwnProperty("name") ||
      !ingradient.hasOwnProperty("amount")
    ) {
      hasKey = false;
      break;
    }
  }
  if (!hasKey) {
    return {
      status: commonErrorCodes.INVALID_INGREDIENTS.status,
      code: commonErrorCodes.INVALID_INGREDIENTS.code,
      message: commonErrorCodes.INVALID_INGREDIENTS.message,
    };
  }

  return commonErrorCodes.SUCCESS;
}
exports.validateIngredients = validateIngredients;

async function validateInstructions(instructions) {
  if (typeof instructions === "undefined") {
    return {
      status: commonErrorCodes.MISSING_INSTRUCTIONS.status,
      code: commonErrorCodes.MISSING_INSTRUCTIONS.code,
      message: commonErrorCodes.MISSING_INSTRUCTIONS.message,
    };
  }
  if (!instructions) {
    return {
      status: commonErrorCodes.INVALID_INSTRUCTIONS.status,
      code: commonErrorCodes.INVALID_INSTRUCTIONS.code,
      message: commonErrorCodes.INVALID_INSTRUCTIONS.message,
    };
  }
  if (instructions && !Array.isArray(instructions)) {
    return {
      status: commonErrorCodes.INVALID_INSTRUCTIONS.status,
      code: commonErrorCodes.INVALID_INSTRUCTIONS.code,
      message: commonErrorCodes.INVALID_INSTRUCTIONS.message,
    };
  }

  if (!instructions.length) {
    return {
      status: commonErrorCodes.MISSING_INSTRUCTIONS.status,
      code: commonErrorCodes.MISSING_INSTRUCTIONS.code,
      message: commonErrorCodes.MISSING_INSTRUCTIONS.message,
    };
  }
  let hasKey = true;
  for (const instruction of instructions) {
    hasKey = true;
    if (
      !instruction.hasOwnProperty("stepNo") ||
      !instruction.hasOwnProperty("stepDesc")
    ) {
      hasKey = false;
      break;
    }
  }
  if (!hasKey) {
    return {
      status: commonErrorCodes.INVALID_INSTRUCTIONS.status,
      code: commonErrorCodes.INVALID_INSTRUCTIONS.code,
      message: commonErrorCodes.INVALID_INSTRUCTIONS.message,
    };
  }
  return commonErrorCodes.SUCCESS;
}
exports.validateInstructions = validateInstructions;
