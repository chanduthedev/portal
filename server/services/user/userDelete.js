// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";

const Users = require("../../models/user");
const commonResponseCodes = require("../../responses/commonRespCodes");

async function process(req, res) {
  try {
    const userId = req.params.id;
    const result = validations.validateUserName(userId);
    if (result["status"] !== commonErrCodes.SUCCESS.status) {
      return res.status(result["status"]).json({
        code: result["code"],
        message: result["message"],
      });
    }
    const user = await Users.findOneAndDelete({ user_name: userId });
    if (user) {
      return res.status(200).json({
        code: commonResponseCodes.USER_DELETED.code,
        message: commonResponseCodes.USER_DELETED.message,
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
exports.process = process;
