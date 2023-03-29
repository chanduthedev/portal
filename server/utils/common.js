// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const url = require("url");
function filterParamsFromQueryStr(req) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  let filterParams = {};
  if (query.city) {
    filterParams.city = query.city;
  }
  if (query.state) {
    filterParams.state = query.state;
  }
  if (query.title) {
    filterParams.title = query.title;
  }
  if (query.postalCode) {
    filterParams.postal_code = query.postalCode;
  }
  if (query.sicCode) {
    filterParams.sic_code = query.sicCode;
  }
  if (query.industry) {
    filterParams.industry = query.industry;
  }
  if (query.companyName) {
    filterParams.company_name = query.companyName;
  }
  return filterParams;
}
exports.filterParamsFromQueryStr = filterParamsFromQueryStr;
