// userReducer.js

const initialState = {
  username: "",
  userId: "",
  fullName: "",
  phoneNumber: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_USERID":
      return { ...state, userId: action.payload };
    case "SET_FULLNAME":
      return { ...state, fullName: action.payload };
    case "SET_PHONENUMBER":
      return { ...state, phoneNumber: action.payload };
    default:
      return state;
  }
};

export default userReducer;
