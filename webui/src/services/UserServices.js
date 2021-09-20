// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------
import { getUrl } from "../utils/common";

async function loginService(body, headers) {
  const apiEndPoint = getUrl("login");
  const serverResp = await fetch(apiEndPoint, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  })
    .then(async (response) => {
      let respData = await response.json();
      return respData;
    })
    .catch((err) => {
      return err;
    });
  return serverResp;
}

async function registerService(body, headers) {
  const apiEndPoint = getUrl("register");
  const serverResp = await fetch(apiEndPoint, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  })
    .then(async (response) => {
      let respData = await response.json();
      return respData;
    })
    .catch((err) => {
      return err;
    });
  return serverResp;
}

export { loginService, registerService };
