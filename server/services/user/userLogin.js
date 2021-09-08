// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";

const Users = require("../../models/user");
const commonResponseCodes = require("../../responses/commonRespCodes");

async function process(req, res) {
  var userDetails = null;

  try {
    userDetails = await Users.findOne({ user_name: req.body.userName });

    if (userDetails) {
      let respData = {};
      respData["userName"] = userDetails.user_name;
      respData["email"] = userDetails.email;
      if (userDetails.password === req.body.password) {
        return res.status(200).json({
          data: respData,
          code: commonResponseCodes.LOGIN_SUCCESS.code,
          message: commonResponseCodes.LOGIN_SUCCESS.message,
        });
      } else {
        return res.status(200).json({
          code: commonResponseCodes.INVALID_CREDENTIALS.code,
          message: commonResponseCodes.INVALID_CREDENTIALS.message,
        });
      }
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
exports.process = process;
