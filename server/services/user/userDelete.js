// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";

const Users = require("../../models/user");
const commonResponseCodes = require("../../responses/commonRespCodes");

async function process(req, res) {
  try {
    const user = await Users.findOneAndDelete({ user_name: req.params.id });
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
