// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const User = require("../../models/user");
const commResp = require("../../responses/commonRespCodes");

("use strict");

async function process(req, res) {
  console.log("username:", req.body.userName);
  const user = new User({
    user_name: req.body.userName,
    password: req.body.password,
    email: req.body.email,
    created_timestamp: new Date().toISOString().replace(/T/, " "),
  });
  try {
    const existingUser = await User.find({ user_name: req.body.userName });
    if (existingUser.length) {
      return res.status(400).json({
        code: commResp.USER_ALREADY_EXISTS.code,
        message: commResp.USER_ALREADY_EXISTS.message,
      });
    }
    const newUser = await user.save();
    if (newUser) {
      return res.status(201).json({
        data: newUser,
        code: commResp.USER_CREATED.code,
        message: commResp.USER_CREATED.message,
      });
    } else {
      return res.status(400).json({
        code: commResp.USER_CREATION_ERROR.code,
        message: commResp.USER_CREATION_ERROR.message,
      });
    }
  } catch (err) {
    console.log("exception:%s", err);
    return res.status(400).json({
      code: commResp.USER_CREATION_EXCEPTION.code,
      message: commResp.USER_CREATION_EXCEPTION.message,
    });
  }
}
exports.process = process;
