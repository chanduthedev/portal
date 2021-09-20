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
