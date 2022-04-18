import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reduce";
import { reducerState } from "./reduce";
export type selectorProps = {
  auth: reducerState;
};

export default configureStore({
  reducer: {
    auth: AuthReducer
  },
  devTools: true
});
