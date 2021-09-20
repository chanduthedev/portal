import { configuration } from "../appConfig";

function getUrl(apiName) {
  const host = configuration.appServer.host;
  const port = configuration.appServer.port;
  let endPoint = "";
  if (apiName === "login") {
    endPoint = configuration.api.user.login;
  } else if (apiName === "register") {
    endPoint = configuration.api.user.register;
  } else if (apiName === "createRecipe") {
    endPoint = configuration.api.recipe.create;
  } else if (apiName === "updateRecipe") {
    endPoint = configuration.api.recipe.update;
  } else if (apiName === "viewRecipe") {
    endPoint = configuration.api.recipe.view;
  } else if (apiName === "deleteRecipe") {
    endPoint = configuration.api.recipe.delete;
  }

  return `${host}:${port}${endPoint}`;
}

function getCommonHeaders() {
  const headers = {};
  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";
  return headers;
}

export { getUrl, getCommonHeaders };
