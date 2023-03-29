// ------------------------------------------------
// * Application: Employee details App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";

const Employee = require("../../models/employes");
const commonResponseCodes = require("../../responses/commonRespCodes");
const commonErrCodes = require("../../responses/commonErrorCodes");
const validations = require("../../utils/validations");

async function process(req, res) {
  try {
    // const inputEmail = req.params.userName;
    // console.log("inputEmail:", inputEmail);
    // const result = validations.validateUserName(inputEmail);
    // if (result["status"] !== commonErrCodes.SUCCESS.status) {
    //   return res.status(result["status"]).json({
    //     code: result["code"],
    //     message: result["message"],
    //   });
    // }

    // let employeeDetails = await Employee.find({ user_name: inputEmail });
    let employeeDetails = await Employee.find({}, { projection: { _id: 0 } });

    console.log("count:", employeeDetails.length);

    if (employeeDetails) {
      let respData = employeeDetails;
      return res.status(200).json({
        data: respData,
        code: commonResponseCodes.EMPLOYEE_DETAILS_FOUND.code,
        message: commonResponseCodes.EMPLOYEE_DETAILS_FOUND.message,
      });
    } else {
      return res.status(404).json({
        code: commonResponseCodes.EMPLOYEE_NOT_FOUND.code,
        message: commonResponseCodes.EMPLOYEE_NOT_FOUND.message,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
exports.process = process;
