export const getFirstName = (firstName) => {
  return {
    type: "FIRST_NAME",
    payload: firstName,
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
export const getCreatePwd = (createPwd) => {
  return {
    type: "CREATE_PWD",
    payload: createPwd,
  };
};
export const getConfirmPwd = (confirmPwd) => {
  return {
    type: "CONFIRM_PWD",
    payload: confirmPwd,
  };
};

// Create Recipe

export const getRecipeName = (recipeName) => {
  return {
    type: "RECIPE_NAME",
    payload: recipeName,
  };
};

export const getIngName_Quatity = (name_Quantity) => {
  return {
    type: "ING_NAME_QUANTITY",
    payload: name_Quantity,
  };
};
export const getStepNo_desc = (stepNo_desc) => {
  return {
    type: "STEPNUM_DESC",
    payload: stepNo_desc,
  };
};
