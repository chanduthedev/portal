// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";

const Users = require("../../models/user");
const commonResponseCodes = require("../../responses/commonRespCodes");
const commErrorCodes = require("../../responses/commonErrorCodes");
const validations = require("../../utils/validations");
const path = require("path");
const jwt = require("jsonwebtoken");

require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

async function processRequest(req, res) {
  var userDetails = null;

  try {
    const result = validations.validateLoginUserRequestBody(req.body);
    if (result["status"] !== commErrorCodes.SUCCESS.status) {
      return res.status(result["status"]).json({
        code: result["code"],
        message: result["message"],
      });
    }

    userDetails = await Users.findOne({ user_name: req.body.userName });

    if (userDetails) {
      console.log("userDetails: %s", userDetails);
      const validPassword = await validations.validatePassword(
        req.body.password,
        userDetails.password
      );
      console.log("validPassword: %s", validPassword);

      if (!validPassword) {
        return res.status(400).json({
          code: commonResponseCodes.INVALID_CREDENTIALS.code,
          message: commonResponseCodes.INVALID_CREDENTIALS.message,
        });
      }

      const accessToken = jwt.sign(
        { userId: req.body.userName },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
      let respData = {};
      respData["userName"] = userDetails.user_name;
      respData["email"] = userDetails.email;
      respData["accessToken"] = accessToken;

      return res.status(200).json({
        data: respData,
        message: commonResponseCodes.LOGIN_SUCCESS.message,
        code: commonResponseCodes.LOGIN_SUCCESS.code,
      });
    } else {
      return res.status(404).json({
        code: commonResponseCodes.USER_DOESNOT_EXISTS.code,
        message: commonResponseCodes.USER_DOESNOT_EXISTS.message,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
exports.processRequest = processRequest;
