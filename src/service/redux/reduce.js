
const initialState = { token: null };

const AuthReducer= (state = initialState, action) => {
  switch (action.type) {
    case "getAccessToken":
      return { ...state, token: action.payload };
    default:
      return state;
  }
}

export default AuthReducer