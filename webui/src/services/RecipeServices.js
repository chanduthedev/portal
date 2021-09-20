// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------
import { getUrl } from "../utils/common";

async function createRecipeService(body, headers) {
  const apiEndPoint = getUrl("createRecipe");
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

async function viewRecipeService(recipeTitle, headers) {
  const apiEndPoint = getUrl("viewRecipe");
  const serverResp = await fetch(`${apiEndPoint}${recipeTitle}`, {
    method: "GET",
    headers,
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

async function updateRecipeService(body, headers) {
  const apiEndPoint = getUrl("updateRecipe");
  const serverResp = await fetch(apiEndPoint, {
    method: "PATCH",
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

async function deleteRecipeService(recipeTitle, headers) {
  const apiEndPoint = getUrl("deleteRecipe");
  const serverResp = await fetch(`${apiEndPoint}${recipeTitle}`, {
    method: "DELETE",
    headers,
  })
    .then(async (response) => {
      let respData = await response.json();
      console.log("respData:%s", JSON.stringify(respData));
      return respData;
    })
    .catch((err) => {
      return err;
    });
  return serverResp;
}

export {
  createRecipeService,
  viewRecipeService,
  updateRecipeService,
  deleteRecipeService,
};
