const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
        userId: action.payload.userId,
        fullName: action.payload.fullName,
        phoneNumber: action.payload.phoneNumber,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        username: "",
        userId: "",
        fullName: "",
        phoneNumber: "",
      };
    default:
      return state;
  }
};
export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
export const initialState = {
  // Your initial state values here
};
