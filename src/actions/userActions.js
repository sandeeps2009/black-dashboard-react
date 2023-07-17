// userActions.js

export const setUsername = (username) => {
  return {
    type: "SET_USERNAME",
    payload: username,
  };
};

export const setUserId = (userId) => {
  return {
    type: "SET_USERID",
    payload: userId,
  };
};

export const setFullName = (fullName) => {
  return {
    type: "SET_FULLNAME",
    payload: fullName,
  };
};

export const setPhoneNumber = (phoneNumber) => {
  return {
    type: "SET_PHONENUMBER",
    payload: phoneNumber,
  };
};
