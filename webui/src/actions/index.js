export const getUserName = (userName) => {
  return {
    type: "USER_NAME",
    payload: userName,
  };
};
export const getLastName = (lastName) => {
  return {
    type: "LAST_NAME",
    payload: lastName,
  };
};
export const getEmailId = (emailId) => {
  return {
    type: "EMAIL_ID",
    payload: emailId,
  };
};
export const getPassword = (password) => {
  return {
    type: "PASSWORD",
    payload: password,
  };
};
export const getConfirmPwd = (confirmPwd) => {
  return {
    type: "CONFIRM_PWD",
    payload: confirmPwd,
  };
};

export const getAccessToken = (accessToken) => {
  return {
    type: "ACCESS_TOKEN",
    payload: accessToken,
  };
};

// Create Recipe

export const getRecipeName = (recipeName) => {
  return {
    type: "RECIPE_NAME",
    payload: recipeName,
  };
};

export const getIngradient = (name_Quantity) => {
  return {
    type: "INGRADIENT",
    payload: name_Quantity,
  };
};
export const getInstruction = (stepNo_desc) => {
  return {
    type: "INSTRUCTION",
    payload: stepNo_desc,
  };
};
export const getImage = (inputImage) => {
  return {
    type: "IMAGE",
    payload: inputImage,
  };
};
