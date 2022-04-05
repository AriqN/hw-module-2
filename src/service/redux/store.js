import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reduce";
// import AccountReducer from "./account-slice";

export default configureStore({
  reducer: {
    auth: AuthReducer
  },
  devTools: true
});
