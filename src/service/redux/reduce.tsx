export type reducerState = {
 token: string | null;
};

const initialState: reducerState = {
  token: null,
};

const AuthReducer= (state = initialState, action:any) => {
  switch (action.type) {
    case "getAccessToken":
      return { ...state, token: action.payload };
    default:
      return state;
  }
}

export default AuthReducer