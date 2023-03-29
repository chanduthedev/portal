// ------------------------------------------------
// * Application: Employee details App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const Employee = require("../../models/employes");
const commResp = require("../../responses/commonRespCodes");
const commErrorCodes = require("../../responses/commonErrorCodes");
const validations = require("../../utils/validations");
const path = require("path");

("use strict");

async function process(req, res) {
  // const result = validations.validateCreateUserRequestBody(req.body);
  // if (result["status"] !== commErrorCodes.SUCCESS.status) {
  //   return res.status(result["status"]).json({
  //     code: result["code"],
  //     message: result["message"],
  //   });
  // }

  const employee = new Employee({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    title: req.body.title,
    company_name: req.body.companyName,
    phone_no: req.body.phoneNo,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    postal_code: req.body.postalCode,
    country: req.body.country,
    url: req.body.url,
    sic_code: req.body.sicCode,
    biz_description: req.body.businessDescription,
    industry: req.body.industry,
    created_timestamp: new Date().toISOString().replace(/T/, " "),
  });
  try {
    const existingUser = await Employee.find({ email: req.body.email });
    if (existingUser.length) {
      return res.status(400).json({
        code: commResp.USER_ALREADY_EXISTS.code,
        message: commResp.USER_ALREADY_EXISTS.message,
      });
    }

    const newEmployee = await employee.save();

    let restData = {};
    restData["firstName"] = newEmployee.first_name;
    restData["lasttName"] = newEmployee.lastt_name;
    restData["email"] = newEmployee.email;
    restData["title"] = newEmployee.title;
    restData["companyName"] = newEmployee.compan_name;
    restData["phoneNo"] = newEmployee.phone_no;
    restData["address"] = newEmployee.address;
    restData["city"] = newEmployee.city;
    restData["state"] = newEmployee.state;
    restData["postalCode"] = newEmployee.postal_code;
    restData["country"] = newEmployee.country;
    restData["url"] = newEmployee.url;
    restData["sicCode"] = newEmployee.sic_code;
    restData["businessDescription"] = newEmployee.biz_description;
    restData["industry"] = newEmployee.industry;

    if (newEmployee) {
      return res.status(201).json({
        data: restData,
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
